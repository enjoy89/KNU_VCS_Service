package com.team4.backend.controller;

import com.team4.backend.domain.vcs.entity.VCS;
import com.team4.backend.service.VCSService;
import com.team4.backend.service.dto.VCSResponseDto;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequiredArgsConstructor
@RequestMapping("/team4/vercontrol")
public class VCSController {
    private final VCSService vcsService;

    @GetMapping("/getconfigall")
    public ResponseEntity<List<VCSResponseDto>> getAllConfig() {
        List<VCSResponseDto> serviceList = vcsService.findAll()
                        .stream().map(VCSResponseDto::new).collect(Collectors.toList());

        System.out.println(serviceList);

        return ResponseEntity.ok().body(serviceList);

    }

    @GetMapping("/getconfigdetails")
    public ResponseEntity<VCS> getConfig(@PathVariable Long id) {
        return null;
    }


}
