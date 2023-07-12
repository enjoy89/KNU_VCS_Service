package com.team4.backend.service.dto;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class VCSDetailsResponseDto {

    private boolean isLatest;
    private String title;
    private String service_nation;
    private String os;
    private String service_version;
    private String service_package;
    private boolean isForceUpdate;

    @Builder
    public VCSDetailsResponseDto(boolean isLatest, String title, String service_nation, String os, String service_version, String service_package, boolean isForceUpdate) {
        this.isLatest = isLatest;
        this.title = title;
        this.service_nation = service_nation;
        this.os = os;
        this.service_version = service_version;
        this.service_package = service_package;
        this.isForceUpdate = isForceUpdate;
    }
}
