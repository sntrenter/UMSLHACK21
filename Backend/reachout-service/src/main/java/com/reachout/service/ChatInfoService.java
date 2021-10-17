package com.reachout.service;

import com.reachout.dto.mapper.ChatInfoMapper;
import com.reachout.dto.response.ChatInfoDto;
import com.reachout.dto.response.TopicDto;
import com.reachout.dto.response.UserDto;
import com.reachout.repository.ChatInfoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
/*@AllArgsConstructor
@NoArgsConstructor*/
public class ChatInfoService {

    @Autowired
    private ChatInfoRepository chatInfoRepository;

    @Autowired
    private ChatInfoMapper chatInfoMapper;

    public List<ChatInfoDto> getChatsByUser(Long id){

        return chatInfoMapper.mapToChatInfoDtos(chatInfoRepository.findByHelper_IdOrSeeker_Id(id, id));
    }

}
