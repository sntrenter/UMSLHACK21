package com.reachout.controller;

import com.reachout.dto.request.TopicCreate;
import com.reachout.dto.response.TopicDto;
import com.reachout.dto.response.UserDto;
import com.reachout.service.TopicService;
import com.reachout.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/reachout-service/topics")
public class TopicController {

    @Autowired
    private TopicService topicService;

    @GetMapping
    public ResponseEntity<List<TopicDto>> getAllTopics() {

        return ResponseEntity.ok(topicService.getAllTopics());
    }

    @GetMapping("/{id}")
    public ResponseEntity<TopicDto> getTopic(@PathVariable Long id) {

        return ResponseEntity.ok(topicService.getTopic(id));
    }

    @PostMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public void createTopic(@RequestBody TopicCreate topicCreate){
        topicService.createTopic(topicCreate);
    }

}
