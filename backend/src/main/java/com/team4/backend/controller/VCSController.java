package com.team4.backend.controller;

import com.team4.backend.domain.vcs.entity.VCS;
import com.team4.backend.service.VCSService;
import com.team4.backend.service.dto.VCSDetailsRequestDto;
import com.team4.backend.service.dto.VCSDetailsResponseDto;
import com.team4.backend.service.dto.VCSResponseDto;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@RestController
@RequiredArgsConstructor
@RequestMapping("/team4/vercontrol")
public class VCSController {
    private final VCSService vcsService;

    // findAll
    @GetMapping("/configs")
    public ResponseEntity<Map<String, Object>> getAllConfig(){

        List<VCSResponseDto> serviceList = vcsService.findAll()
                        .stream().map(VCSResponseDto::new).collect(Collectors.toList());

        Map<String, Object> result = new HashMap<>();
        result.put("configs", serviceList);
        return ResponseEntity.ok().body(result);

    }

    // findOne
    @PostMapping("/config")
    public ResponseEntity<VCSDetailsResponseDto> getConfig(@RequestBody VCSDetailsRequestDto requestDto) {

        VCSDetailsResponseDto responseDto = vcsService.getClientInfo(requestDto);
        System.out.println(responseDto);
        return ResponseEntity.ok().body(responseDto);

    }

}
