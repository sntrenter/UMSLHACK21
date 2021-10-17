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

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public ChatInfo getChatInfo() {
        return chatInfo;
    }

    public void setChatInfo(ChatInfo chatInfo) {
        this.chatInfo = chatInfo;
    }

    public User getChatter() {
        return chatter;
    }

    public void setChatter(User chatter) {
        this.chatter = chatter;
    }

    public String getChatText() {
        return chatText;
    }

    public void setChatText(String chatText) {
        this.chatText = chatText;
    }

    public LocalDateTime getTimeStamp() {
        return timeStamp;
    }

    public void setTimeStamp(LocalDateTime timeStamp) {
        this.timeStamp = timeStamp;
    }
}
