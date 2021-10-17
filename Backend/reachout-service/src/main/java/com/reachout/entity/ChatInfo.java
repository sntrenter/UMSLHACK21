package com.reachout.entity;


import lombok.AllArgsConstructor;
import lombok.Data;

import javax.persistence.*;
import java.io.Serializable;
import java.util.List;

@Entity
@Table(name="CHAT_INFO")
public class ChatInfo {

    @Id
    private String id;

    @OneToOne
    @JoinColumn(name = "helper_id")
    private User helper;

    @OneToOne
    @JoinColumn(name = "seeker_id")
    private User seeker;

    @OneToOne
    @JoinColumn(name = "topic_id")
    private Topic topic;


    @OneToMany(mappedBy = "chatInfo")
    private List<Chat> chats;

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public User getHelper() {
        return helper;
    }

    public void setHelper(User helper) {
        this.helper = helper;
    }

    public User getSeeker() {
        return seeker;
    }

    public void setSeeker(User seeker) {
        this.seeker = seeker;
    }

    public Topic getTopic() {
        return topic;
    }

    public void setTopic(Topic topic) {
        this.topic = topic;
    }

    public List<Chat> getChats() {
        return chats;
    }

    public void setChats(List<Chat> chats) {
        this.chats = chats;
    }

}
