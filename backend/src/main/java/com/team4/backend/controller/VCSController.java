package com.team4.backend.controller;

import com.team4.backend.domain.vcs.entity.VCS;
import com.team4.backend.service.VCSService;
import com.team4.backend.service.dto.VCSDetailsRequestDto;
import com.team4.backend.service.dto.VCSDetailsResponseDto;
import com.team4.backend.service.dto.VCSRequestDto;
import com.team4.backend.service.dto.VCSResponseDto;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@RestController
@RequiredArgsConstructor
@Slf4j
@RequestMapping("/team4/vercontrol")
public class VCSController {
    private final VCSService vcsService;
    @Value("${serviceKey}")
    private String SERVICE_KEY;

    // Create
    @PostMapping("/config")
    public ResponseEntity<VCS> saveConfig(@RequestBody VCSRequestDto requestDto,
                                          @RequestHeader("serviceKey") String key) {
        if (clientVerification(key)) {
            return ResponseEntity.status(HttpStatus.CREATED)
                    .body(vcsService.saveConfig(requestDto));
        } else {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
    }

    // Read All
    @GetMapping("/configs")
    public ResponseEntity<Map<String, Object>> getAllConfig(@RequestHeader("numOfRows") String num,
                                                            @RequestHeader("serviceKey") String key) {
        if (clientVerification(key)) {
            List<VCSResponseDto> serviceList = vcsService.findAll()
                    .stream().map(VCSResponseDto::new).collect(Collectors.toList());

            // TODO: 사용자로부터 입력 받은 num의 개수만 반환하는 로직
            if (serviceList.size() >= Integer.parseInt(num)) {
                serviceList = serviceList.subList((serviceList.size() - Integer.parseInt(num)), serviceList.size());
            }

            Map<String, Object> result = new HashMap<>();
            result.put("numOfRows", num);
            result.put("configs", serviceList);
            return ResponseEntity.ok().body(result);
        } else {
            // TODO: 에러 메시지 보내기
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
    }

    // Read details
    @PostMapping("/config-details")
    public ResponseEntity<VCSDetailsResponseDto> getConfig(@RequestBody VCSDetailsRequestDto requestDto,
                                                           @RequestHeader("serviceKey") String key) {
        if (clientVerification(key)) {
            vcsService.saveClient(requestDto);
            return ResponseEntity.ok().body(vcsService.getLatestVerInfo(requestDto));
        } else {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
    }

    // Delete
    @DeleteMapping("/config/{id}")
    public ResponseEntity<Void> deleteVCS(@RequestHeader("serviceKey") String key,
                                          @PathVariable Long id) {
        if (clientVerification(key)) {
            vcsService.delete(id);
            return ResponseEntity.ok().build();
        } else {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
    }

    // 사용자 검증
    public boolean clientVerification(String key) {
        return key.equals(SERVICE_KEY);
    }
}
