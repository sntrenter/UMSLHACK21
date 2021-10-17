package com.reachout.repository;

import com.reachout.entity.Topic;
import com.reachout.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

public interface TopicRepository extends JpaRepository<Topic, Long> {

}
