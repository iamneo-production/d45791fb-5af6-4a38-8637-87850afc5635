package com.example.springapp.response;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class MsgDataResponse {
    private String msg;
    private Object data;

    public MsgDataResponse(String msg, Object data) {
        this.msg = msg;
        this.data = data;
    }

}
