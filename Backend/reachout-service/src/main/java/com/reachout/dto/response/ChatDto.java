package com.reachout.dto.response;

import com.reachout.entity.ChatInfo;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import java.time.LocalDateTime;

public class ChatDto {

    private Long id;
    private String chatText;
    private LocalDateTime timeStamp;
}
