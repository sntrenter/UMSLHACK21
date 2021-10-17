package com.reachout.service;

import com.reachout.dto.mapper.TopicMapper;
import com.reachout.dto.mapper.UserMapper;
import com.reachout.dto.response.TopicDto;
import com.reachout.dto.response.UserDto;
import com.reachout.repository.TopicRepository;
import com.reachout.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
/*@AllArgsConstructor
@NoArgsConstructor*/
public class TopicService {

    @Autowired
    private TopicRepository topicRepository;

    @Autowired
    private TopicMapper topicMapper;

    public List<TopicDto> getAllTopics(){

        return topicMapper.mapToTopicDtos(topicRepository.findAll());
    }

    public TopicDto getTopic(Long id){

        return topicMapper.mapToTopicDto(topicRepository.getById(id));
    }
}
