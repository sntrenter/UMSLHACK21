package com.reachout.dto.response;

import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import com.reachout.dto.response.UserDto;

@AllArgsConstructor
@NoArgsConstructor
public class TopicDto {

    private Long id;
    private UserDto seeker;
    private UserDto helper;
    private String desc;


    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public UserDto getSeeker() {
        return seeker;
    }

    public void setSeeker(UserDto seeker) {
        this.seeker = seeker;
    }

    public UserDto getHelper() {
        return helper;
    }

    public void setHelper(UserDto helper) {
        this.helper = helper;
    }

    public String getDesc() {
        return desc;
    }

    public void setDesc(String desc) {
        this.desc = desc;
    }
}


