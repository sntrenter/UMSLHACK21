package com.reachout.dto.response;

public class ChatDto {

    private Long id;
    private UserDto chatter;
    private String chatText;
    private String timeStamp;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public UserDto getChatter() {
        return chatter;
    }

    public void setChatter(UserDto chatter) {
        this.chatter = chatter;
    }

    public String getChatText() {
        return chatText;
    }

    public void setChatText(String chatText) {
        this.chatText = chatText;
    }

    public String getTimeStamp() {
        return timeStamp;
    }

    public void setTimeStamp(String timeStamp) {
        this.timeStamp = timeStamp;
    }
}
