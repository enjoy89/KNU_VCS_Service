package com.team4.backend.service;

import com.team4.backend.domain.vcs.entity.VCS;
import com.team4.backend.domain.vcs.repository.VCSRepository;
import com.team4.backend.service.dto.VCSDetailsRequestDto;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@RequiredArgsConstructor
@Service
public class VCSService {
    private final VCSRepository vcsRepository;

    // 서비스 전체 조회
    public List<VCS> findAll() {
        return vcsRepository.findAll();
    }

    // 서비스 단건 조회
    public VCS findById(Long id){
        return  vcsRepository.findById(id)
                .orElseThrow(()->new IllegalArgumentException("update not exist : " + id));
    }

    public getClientInfo(VCSDetailsRequestDto requestDto) {


    }


    public void delete(Long id) {
        vcsRepository.deleteById(id);
    }
}
