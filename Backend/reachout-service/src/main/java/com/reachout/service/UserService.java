package com.reachout.service;

import com.reachout.dto.mapper.UserMapper;
import com.reachout.dto.response.UserDto;
import com.reachout.entity.User;
import com.reachout.repository.UserRepository;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
/*@AllArgsConstructor
@NoArgsConstructor*/
public class UserService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private UserMapper userMapper;

    public List<UserDto> getAllUsers(){
        return userMapper.mapToUserDtos(userRepository.findAll());
    }

    public UserDto getUser(Long id){
        return userMapper.mapToUserDto(userRepository.getById(id));
    }
}
