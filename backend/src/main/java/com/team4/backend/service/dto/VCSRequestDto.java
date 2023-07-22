package com.team4.backend.service.dto;

import com.team4.backend.domain.vcs.entity.VCS;
import lombok.Getter;

@Getter
public class VCSRequestDto {

    private String title;
    private String nation;
    private String os;
    private String version;
    private String message;
    private String service_package;
    private String forceUpdatePoint;

    public VCS toEntity(){
        return VCS.builder()
                .title(title)
                .nation(nation)
                .version(version)
                .os(os)
                .message(message)
                .service_package(service_package)
                .forceUpdatePoint(forceUpdatePoint)
                .build();
    }
}
