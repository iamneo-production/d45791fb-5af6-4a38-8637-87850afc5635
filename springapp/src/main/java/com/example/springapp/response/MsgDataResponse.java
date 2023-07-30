package com.example.springapp.response;

public class MsgDataResponse {
    private String msg;
    private Object data;

    public MsgDataResponse(String msg, Object data) {
        this.msg = msg;
        this.data = data;
    }

    public String getMsg() {
        return this.msg;
    }

    public void setMsg(String msg) {
        this.msg = msg;
    }

    public Object getData() {
        return this.data;
    }

    public void setData(Object data) {
        this.data = data;
    }

}
