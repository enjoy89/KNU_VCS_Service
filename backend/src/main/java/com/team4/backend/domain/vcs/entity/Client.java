package com.team4.backend.domain.vcs.entity;

import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import javax.persistence.*;

@Entity
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Table(name = "client")
public class Client {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "client_id", updatable = false)
    private Long id;

    @Column(name = "client_title", nullable = false)
    private String title;

    @Column(name = "client_nation", nullable = false)
    private String nation;

    @Column(name = "client_os", nullable = false)
    private String os;

    @Column(name = "client_version", nullable = false)
    private String version;

    @Builder
    public Client(Long id, String title, String nation, String os, String version) {
        this.id = id;
        this.title = title;
        this.nation = nation;
        this.os = os;
        this.version = version;
    }
}
