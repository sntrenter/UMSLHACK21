package com.reachout.repository;

import com.reachout.entity.ChatInfo;
import com.reachout.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ChatInfoRepository extends JpaRepository<ChatInfo, Long>{

    List<ChatInfo> findByHelper_IdOrSeeker_Id(Long helperId, Long seekerId);

}
