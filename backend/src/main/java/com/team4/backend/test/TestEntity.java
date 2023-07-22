package com.team4.backend.test;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "test")
public class TestEntity {

    @Id
    @GeneratedValue
    private Long id;

    private String title;
}
