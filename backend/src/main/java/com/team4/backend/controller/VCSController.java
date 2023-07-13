package com.team4.backend.controller;

import com.team4.backend.service.VCSService;
import com.team4.backend.service.dto.VCSDetailsRequestDto;
import com.team4.backend.service.dto.VCSDetailsResponseDto;
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
    @Value("${secretKey}")
    private String SERVICE_KEY;

    // findAll
    @GetMapping("/configs")
    public ResponseEntity<Map<String, Object>> getAllConfig(
            @RequestParam("numOfRows") String num,
            @RequestParam("serviceKey") String key) {

        log.info(num);
        log.info(key);

        if (key.equals(SERVICE_KEY)) {
            List<VCSResponseDto> serviceList = vcsService.findAll()
                    .stream().map(VCSResponseDto::new).collect(Collectors.toList());

            // TODO: 사용자로부터 입력 받은 num의 개수만 반환하는 로직

            Map<String, Object> result = new HashMap<>();
            result.put("numOfRows", num);
            result.put("configs", serviceList);
            return ResponseEntity.ok().body(result);
        } else {

            // TODO: 에러 메시지 보내기
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
    }

    @PostMapping("/config")
    public ResponseEntity<VCSDetailsResponseDto> getConfig(@RequestBody VCSDetailsRequestDto requestDto) {
        return ResponseEntity.ok().body(vcsService.getClientInfo(requestDto));
    }
}
