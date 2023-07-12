package com.team4.backend.service.dto;

import lombok.Getter;

@Getter
public class VCSDetailsResponseDto {

    private boolean isLatest;
    private String title;
    private String service_nation;
    private String os;
    private String service_version;
    private String service_package;
    private boolean isForceUpdate;
}
