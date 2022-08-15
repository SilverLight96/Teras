package com.teras.api.service;

import com.google.gson.JsonObject;
import com.teras.api.request.OpenviduRegisterPostReq;
import com.teras.db.dto.OpenviduDto;
import com.teras.db.entity.Openvidu;

public interface OpenviduService {
	JsonObject createRoom();
	void deleteRoom();
	void enterRoom();
	void leaveRoom();
	void fetchInfo();
	void fetchAll();
	Openvidu createSession(OpenviduRegisterPostReq registerInfo);
	OpenviduDto searchOpenvidu(String sessionId);
	
	
}
	