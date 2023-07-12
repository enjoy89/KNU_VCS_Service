package com.team4.backend.service.dto;

import lombok.AllArgsConstructor;
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
}
