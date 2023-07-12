package com.team4.backend.service;

import com.team4.backend.domain.vcs.entity.VCS;
import com.team4.backend.domain.vcs.repository.VCSRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@RequiredArgsConstructor
@Service
public class VCSService {
    private final VCSRepository vcsRepository;
    public List<VCS> findAll() {
        return vcsRepository.findAll();
    }

    public VCS findById(Long id){
        return  vcsRepository.findById(id)
                .orElseThrow(()->new IllegalArgumentException("update not exist : " + id));
    }

//    public void save() {
//        VCS vcs = VCS.builder()
//                .id
//                .build();
//    }
}
