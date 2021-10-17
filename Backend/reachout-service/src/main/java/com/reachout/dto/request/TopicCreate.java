package com.reachout.dto.request;

public class TopicCreate {

    private Long seeker_id;

    //private Long helper_id;

    private String desc;

    public Long getSeeker_id() {
        return seeker_id;
    }

    public void setSeeker_id(Long seeker_id) {
        this.seeker_id = seeker_id;
    }

    public String getDesc() {
        return desc;
    }

    public void setDesc(String desc) {
        this.desc = desc;
    }
}
