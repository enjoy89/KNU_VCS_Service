package com.team4.backend.service.dto;

import com.team4.backend.domain.vcs.entity.Client;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
@AllArgsConstructor
public class VCSDetailsRequestDto {

    private String title;
    private String client_nation;
    private String client_os;
    private String client_version;

    @Builder
    public Client toEntity() {
        return Client.builder()
                .title(title)
                .nation(client_nation)
                .os(client_os)
                .version(client_version)
                .build();
    }
}


