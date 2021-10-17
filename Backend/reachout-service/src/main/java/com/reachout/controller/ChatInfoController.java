package com.reachout.controller;

import com.reachout.dto.response.ChatInfoDto;
import com.reachout.service.ChatInfoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/reachout-service/chats")
public class ChatInfoController {

    @Autowired
    private ChatInfoService chatInfoService;

    @GetMapping("/user/{id}")
    private ResponseEntity<List<ChatInfoDto>> getChatsByUser(@PathVariable Long id) {
        return ResponseEntity.ok(chatInfoService.getChatsByUser(id));
    }


}
