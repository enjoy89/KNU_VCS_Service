package com.team4.backend.domain.vcs.repository;

import com.team4.backend.domain.vcs.entity.Client;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ClientRepository extends JpaRepository<Client, Long> {
}

