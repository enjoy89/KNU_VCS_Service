package com.team4.backend.domain.vcs.entity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
@Getter
@NoArgsConstructor
@AllArgsConstructor
@MappedSuperclass
@EntityListeners(AuditingEntityListener.class)
@Table(name = "vcs_info")
public class VCS {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "service_id")
    private Long id;

    @Column(name = "service_title")
    private String title;

    @Column(name = "service_location")
    private String location;

    @Column(name = "service_os")
    private String os;

    @Column(name = "service_message")
    private String message;

    @CreatedDate
    @Column(name = "service_regdate")
    private LocalDateTime regdate;

    private String forceUpdatePoint;
}
