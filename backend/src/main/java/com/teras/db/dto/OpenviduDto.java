package com.teras.db.dto;

import com.teras.db.entity.Openvidu;

public class OpenviduDto {
	String goal;
	String subjectCode;
	String hostId;
	
	public OpenviduDto(Openvidu openvidu) {
		goal = openvidu.getGoal();
		subjectCode = openvidu.getSubjectCode().getSubjectCode();
		hostId = openvidu.getHostId();
	}
}
