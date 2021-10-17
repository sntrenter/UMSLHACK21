package com.reachout.dto.response;

import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;

import java.util.List;

@AllArgsConstructor
@NoArgsConstructor
public class ChatInfoDto {
    private Long id;
    private UserDto helper;
    private UserDto seeker;
    private TopicDto topic;
    private List<ChatDto> chats;

}


