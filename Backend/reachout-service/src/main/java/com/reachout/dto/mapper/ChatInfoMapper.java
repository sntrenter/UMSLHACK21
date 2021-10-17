package com.reachout.dto.mapper;

import com.reachout.dto.response.ChatDto;
import com.reachout.dto.response.ChatInfoDto;
import com.reachout.entity.Chat;
import com.reachout.entity.ChatInfo;
import org.mapstruct.Mapper;

import java.util.List;

@Mapper(componentModel = "spring")
public interface ChatInfoMapper {

    ChatInfoDto mapToChatInfoDto(ChatInfo chatInfo);

    List<ChatInfoDto> mapToChatInfoDtos(List<ChatInfo> chatInfos);

    ChatDto mapToChatDto(Chat chat);
    List<ChatDto> mapToChatDtos(List<Chat> chats);

}
