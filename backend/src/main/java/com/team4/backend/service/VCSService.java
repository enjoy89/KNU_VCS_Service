package com.team4.backend.service;

import com.team4.backend.domain.vcs.entity.VCS;
import com.team4.backend.domain.vcs.repository.ClientRepository;
import com.team4.backend.domain.vcs.repository.VCSRepository;
import com.team4.backend.service.dto.VCSDetailsRequestDto;
import com.team4.backend.service.dto.VCSDetailsResponseDto;
import com.team4.backend.service.dto.VCSRequestDto;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import lombok.extern.slf4j.Slf4j;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
@Slf4j
public class VCSService {
    private final VCSRepository vcsRepository;
    private final ClientRepository clientRepository;

    @Transactional
    public VCS saveConfig(VCSRequestDto requestDto) {
        return vcsRepository.save(requestDto.toEntity());
    }

    // 서비스 전체 조회
    @Transactional
    public List<VCS> findAll() {
        return vcsRepository.findAll();
    }

    // 서비스 단건 조회
    public VCS findById(Long id) {
        return vcsRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("update not exist : " + id));
    }

    // 사용자 정보 필터링
    public List<VCS> Filtering(VCSDetailsRequestDto requestDto) {
        List<VCS> list = vcsRepository.findAll();   // 본래 서비스 정보 조회

        // 1. 나라 필터링
        List<VCS> filterNation = list.stream().filter(config ->
                        config.getNation().equals(requestDto.getClient_nation()))
                .collect(Collectors.toList());
        log.info("nation filtering result : " + filterNation.size());

        // 2. OS 필터링
        List<VCS> filterOs = filterNation.stream().filter(config ->
                        config.getOs().equals(requestDto.getClient_os()))
                .collect(Collectors.toList());
        log.info("os filtering result : " + filterOs.size());

        // 3. 버전 필터링
        List<VCS> filterVer = filterOs.stream().filter(config ->
                        Double.parseDouble(config.getVersion())
                                >= Double.parseDouble(requestDto.getClient_version()))
                .collect(Collectors.toList());
        log.info("version filtering result : " + filterVer.size());

        return filterVer;
    }

    // 업데이트 조건을 검사함
    public VCSDetailsResponseDto getLatestVerInfo(VCSDetailsRequestDto requestDto) {
        boolean isForceUpdate = false;  // 강제적 업데이트 정보 초기화

        // client 정보를 필터링 처리
        List<VCS> client = Filtering(requestDto);

        // client 정보의 사이즈가 1인 경우: 필터링 된 결과가 1개이므로 이가 최신버전임을 의미한다.
        // 사이즈가 2 이상인 경우: 최신버전이 존재하므로 업데이트가 필요함
        // 사이즈가 0인 경우: 잘못된 데이터임 -> 예외 처리 해야됨
        boolean isLatest = client.size() == 1;

        if(client.size() <= 0) {
            throw new IllegalArgumentException("존재하지 않는 데이터 정보입니다.");
        }

        // 자기 자신을 제외하고 이후에 업데이트 된 버전의 강제 업데이트 여부를 확인
        List<VCS> exceptClientVer = client.subList(1, client.size());

        // 강제적 업데이트가 필요한 경우 필터링
        isForceUpdate = exceptClientVer.stream().filter(VCS::isForceUpdatePoint).count() > 0;

        // 사용자 조건에 해당하는 최신화 버전 VCS 결과
        VCS filtervcs = client.get(client.size() - 1);

        return VCSDetailsResponseDto.builder()
                .isLatest(isLatest)
                .title(filtervcs.getTitle())
                .nation(filtervcs.getNation())
                .os(filtervcs.getOs())
                .version(filtervcs.getVersion())
                .service_package(filtervcs.getService_package())
                .isForceUpdate(isForceUpdate)
                .build();
    }

    public void saveClient(VCSDetailsRequestDto client) {
        clientRepository.save(client.toEntity());
    }

    @Transactional
    public void delete(Long id) {
        vcsRepository.deleteById(id);
    }
}
