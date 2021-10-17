package com.reachout.dto.mapper;

import com.reachout.dto.response.TopicDto;
import com.reachout.dto.response.UserDto;
import com.reachout.entity.Topic;
import com.reachout.entity.User;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.Mappings;

import java.util.List;

@Mapper(componentModel = "spring")
public interface TopicMapper {

    TopicDto mapToTopicDto(Topic topic);

    List<TopicDto> mapToTopicDtos(List<Topic> topics);
}
