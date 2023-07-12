package com.team4.backend.service;

import com.team4.backend.domain.vcs.entity.VCS;
import com.team4.backend.domain.vcs.repository.VCSRepository;
import com.team4.backend.service.dto.VCSDetailsRequestDto;
import com.team4.backend.service.dto.VCSDetailsResponseDto;
import lombok.NoArgsConstructor;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@RequiredArgsConstructor
@Service
public class VCSService {
    private final VCSRepository vcsRepository;

    // 서비스 전체 조회
    public List<VCS> findAll() {
        return vcsRepository.findAll();
    }

    // 서비스 단건 조회


    public VCSDetailsResponseDto getClientInfo(VCSDetailsRequestDto requestDto) {

        List<VCS> list = vcsRepository.findAll();

        List<VCS> filterNation = list.stream().filter(config -> config.getNation().equals(requestDto.getClient_nation())).collect(Collectors.toList());
        List<VCS> filterOs = filterNation.stream().filter(config->config.getOs().equals(requestDto.getClient_os())).collect(Collectors.toList());
        List<VCS> filterVer = filterOs.stream().filter(config->Double.parseDouble(config.getVersion())>Double.parseDouble(requestDto.getClient_version())).collect(Collectors.toList());

        boolean isLatest = false;


        System.out.println("list : "+ list.size());
        System.out.println("nation : "+ filterNation.size());
        System.out.println("os : " + filterOs.size());
        System.out.println("verF : " + filterVer.size());

        if(filterVer.size()==0){
            isLatest = true;
        }else {
            isLatest = false;
        }



        boolean isForceUpdate = filterVer.stream().filter(config->config.isForceUpdatePoint()==true).collect(Collectors.toList()).size()>0;
        VCS filtervcs = filterVer.get(filterVer.size()-1);

        VCSDetailsResponseDto responseDto = VCSDetailsResponseDto.builder()
                .isLatest(isLatest)
                .title(filtervcs.getTitle())
                .service_nation(filtervcs.getNation())
                .os(filtervcs.getOs())
                .service_version(filtervcs.getVersion())
                .service_package(filtervcs.getService_package())
                .isForceUpdate(isForceUpdate)
                .build();


        return responseDto;
    }


    public void delete(Long id) {
        vcsRepository.deleteById(id);
    }
}
