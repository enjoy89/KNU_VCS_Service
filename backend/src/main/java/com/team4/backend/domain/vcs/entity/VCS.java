package com.team4.backend.domain.vcs.entity;

import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import javax.persistence.*;

@Entity
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Table(name = "vcs_info")
public class VCS extends TimeEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "service_id", updatable = false)
    private Long id;

    @Column(name = "service_title", nullable = false)
    private String title;

    @Column(name = "service_nation", nullable = false)
    private String nation;

    @Column(name = "service_os", nullable = false)
    private String os;

    @Column(name = "service_version", nullable = false)
    private String version;

    @Column(name = "service_message", nullable = false)
    private String message;

    @Column(name = "service_package", nullable = false)
    private String service_package;

    private boolean forceUpdatePoint;

    @Builder
    public VCS(Long id, String title, String location, String os, String version, String message, String service_package, String forceUpdatePoint) {
        this.id = id;
        this.title = title;
        this.nation = location;
        this.os = os;
        this.version = version;
        this.message = message;
        this.service_package = service_package;
        this.forceUpdatePoint = false;
    }
}
