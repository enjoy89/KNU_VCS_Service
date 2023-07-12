package com.team4.backend.controller;

import com.team4.backend.domain.vcs.entity.VCS;
import com.team4.backend.service.VCSService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/team4")
public class VCSController {
    private final VCSService vcsService;

    @GetMapping("/config/all")
    public ResponseEntity<List<VCS>> getAllConfig() {
        List<VCS> serviceList = vcsService.findAll();
        return ResponseEntity.ok().body(serviceList);
    }

    @GetMapping("/config/details/{id}")
    public ResponseEntity<VCS> getConfig(@PathVariable Long id) {
        return null;
    }


}
