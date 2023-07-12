package com.team4.backend.controller;

import com.team4.backend.domain.vcs.entity.VCS;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/team4/vercontrol")
public class VCSController {
    private final

    @GetMapping("/config-all")
    public ResponseEntity<List<VCS>> getAllConfig() {

    }
}
