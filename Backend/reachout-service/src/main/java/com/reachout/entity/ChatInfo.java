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
}
