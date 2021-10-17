package com.reachout.dto.mapper;

import com.reachout.dto.response.ChatDto;
import com.reachout.dto.response.ChatInfoDto;
import com.reachout.entity.Chat;
import com.reachout.entity.ChatInfo;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.Mappings;

import java.util.List;

@Mapper(componentModel = "spring")
public interface ChatInfoMapper {

    ChatInfoDto mapToChatInfoDto(ChatInfo chatInfo);

    List<ChatInfoDto> mapToChatInfoDtos(List<ChatInfo> chatInfos);

/*    @Mappings({
            @Mapping(target="id", source="chat.id"),
            @Mapping(target="chatter", source="chat.chatter"),
            @Mapping(target="chatText", source="chat.chatText"),
            @Mapping(target="timeStamp", source="chat.timeStamp")
    })*/
    ChatDto mapToChatDto(Chat chat);

    List<ChatDto> mapToChatDtos(List<Chat> chats);

}
