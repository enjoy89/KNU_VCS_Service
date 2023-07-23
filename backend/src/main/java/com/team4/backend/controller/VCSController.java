package com.team4.backend.controller;

import com.team4.backend.domain.vcs.entity.VCS;
import com.team4.backend.service.VCSService;
import com.team4.backend.service.dto.*;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
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
    @GetMapping("/configs-all")
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

    // Read All && 페이징 기능 추가
    @PostMapping("/configs-paging")
    public  ResponseEntity<Map<String, Object>> pageVersionConfigs(@RequestBody PageRequestDto requestDto,
                                                                   @RequestHeader("numOfRows") String num,
                                                                   @RequestHeader("serviceKey") String key) {

        if (clientVerification(key)) {
            // 바디에서는 현재 페이지 번호를 가져오고, 헤더에서는 표시해 줄 row수를 가져온다

            //pagerequest에 현재 페이지 번호와 원하는 row수와 정렬 기준을 파라미타로 전달
            PageRequest pageable = PageRequest.of(requestDto.getPage(), Integer.parseInt(num), Sort.by("id").descending());

            // page 객체로 vcsservice에서 pageble정보로 데이터를 가져옴
            Page page =  vcsService.pageVersions(pageable);

            // content에 configs 데이터가 전달되는데, 우리가 설정한 dto로 바꾸는 코드
            List<VCSResponseDto> serviceList = ((List<VCS>)page.getContent())
                    .stream().map(VCSResponseDto::new).collect(Collectors.toList());

            // page객체에서 필요한 정보들을 꺼내서 바디로 전달
            Map<String, Object> result = new HashMap<>();
            result.put("numOfRows", num);
            result.put("configs", serviceList);
            result.put("totalPages",page.getTotalPages());
            result.put("totalElements",page.getTotalElements());
            result.put("pogeNumber",page.getNumber());
            result.put("isFirst",page.isFirst());
            result.put("isLast",page.isLast());
            result.put("hasNext",page.hasNext());
            result.put("hasPrevious",page.hasPrevious());

            return ResponseEntity.ok().body(result);
        } else {
            // TODO: 에러 메시지 보내기
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
    }

}
