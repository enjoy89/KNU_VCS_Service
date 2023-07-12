package com.team4.backend.service.dto;

import com.team4.backend.domain.vcs.entity.VCS;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Getter
public class VCSResponseDto {
    private Long id;
    private String title;
    private String location;
    private String os;
    private String message;
    private String service_package;
    private String forceUpdatePoint;

    public VCSResponseDto(VCS vcs) {
        this.id = vcs.getId();
        this.title = vcs.getTitle();
        this.location = vcs.getLocation();
        this.os = vcs.getOs();
        this.message = vcs.getMessage();
        this.service_package = vcs.getService_package();
        this.forceUpdatePoint = vcs.getForceUpdatePoint();
    }
}
