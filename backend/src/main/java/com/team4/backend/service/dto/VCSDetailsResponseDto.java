package com.team4.backend.service.dto;

import lombok.*;

@Getter
@NoArgsConstructor
public class VCSDetailsResponseDto {
    private boolean isLatest;
    private String title;
    private String nation;
    private String os;
    private String version;
    private String service_package;
    private boolean isForceUpdate;

    @Builder
    public VCSDetailsResponseDto(boolean isLatest, String title, String nation, String os, String version, String service_package, boolean isForceUpdate) {
        this.isLatest = isLatest;
        this.title = title;
        this.nation = nation;
        this.os = os;
        this.version = version;
        this.service_package = service_package;
        this.isForceUpdate = isForceUpdate;
    }
}
