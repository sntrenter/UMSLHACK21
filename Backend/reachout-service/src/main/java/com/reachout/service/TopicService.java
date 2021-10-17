package com.reachout.service;

import com.reachout.dto.mapper.TopicMapper;
import com.reachout.dto.mapper.UserMapper;
import com.reachout.dto.request.TopicCreate;
import com.reachout.dto.response.TopicDto;
import com.reachout.dto.response.UserDto;
import com.reachout.entity.Topic;
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
    private UserRepository userRepository;

    @Autowired
    private TopicMapper topicMapper;

    public List<TopicDto> getAllTopics(){

        return topicMapper.mapToTopicDtos(topicRepository.findAll());
    }

    public TopicDto getTopic(Long id){

        return topicMapper.mapToTopicDto(topicRepository.getById(id));
    }

    public void createTopic(TopicCreate topicCreate) {
        Topic topic = new Topic();
        topic.setSeeker(userRepository.findById(topicCreate.getSeeker_id()).get());
        topic.setDesc(topicCreate.getDesc());
        topicRepository.save(topic);


    }
}
