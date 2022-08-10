package com.teras.api.service;

import java.util.List;

import com.teras.api.request.NoticeRegisterPostReq;
import com.teras.db.dto.NoticeDto;
import com.teras.db.entity.Notice;
import com.teras.db.entity.User;

public interface NoticeService {
	Notice createNotice(NoticeRegisterPostReq noticeRegisterInfo, String userId);
	
	NoticeDto getNotice(long noticeNo);
	
	Boolean editNotice(long noticeNo, User user, NoticeRegisterPostReq noticePostReq);
	
	Boolean deleteNotice(long noticeNo, User user);

	List<NoticeDto> getNoticeList(String userId);
	
	List<NoticeDto> getNoticeList(String userId, int page);
}
