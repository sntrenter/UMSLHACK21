package com.reachout.dto.response;

import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;

import java.util.List;

/*@AllArgsConstructor
@NoArgsConstructor*/
public class ChatInfoDto {
    private Long id;
    private UserDto helper;
    private UserDto seeker;
    private TopicDto topic;
    private List<ChatDto> chats;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public UserDto getHelper() {
        return helper;
    }

    public void setHelper(UserDto helper) {
        this.helper = helper;
    }

    public UserDto getSeeker() {
        return seeker;
    }

    public void setSeeker(UserDto seeker) {
        this.seeker = seeker;
    }

    public TopicDto getTopic() {
        return topic;
    }

    public void setTopic(TopicDto topic) {
        this.topic = topic;
    }

    public List<ChatDto> getChats() {
        return chats;
    }

    public void setChats(List<ChatDto> chats) {
        this.chats = chats;
    }
}


