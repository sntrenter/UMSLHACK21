package com.reachout.entity;

import lombok.Data;

import javax.persistence.*;
import java.time.Instant;
import java.time.LocalDateTime;

@Entity
@Table(name="CHAT")
public class Chat {

    @Id
    private Long id;

    @ManyToOne
    @JoinColumn(name="chat_info_id", nullable=false)
    private ChatInfo chatInfo;

    @OneToOne
    private User chatter;

    private String chatText;

    private LocalDateTime timeStamp;
}
