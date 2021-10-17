package com.reachout.dto.mapper;

import com.reachout.dto.response.UserDto;
import com.reachout.entity.User;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.Mappings;

import java.util.List;

@Mapper(componentModel = "spring")
public interface UserMapper {

    @Mappings({
            @Mapping(target="id", source="user.id"),
            @Mapping(target="name", source="user.name")
    })
    UserDto mapToUserDto(User user);

    List<UserDto> mapToUserDtos(List<User> users);
}
