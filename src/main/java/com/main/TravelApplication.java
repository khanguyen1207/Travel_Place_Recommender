package com.main;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication
@ComponentScan(basePackages = {"com.main", "com.places", "com.review", "com.account"})
@EntityScan({"com.places.model", "com.review.model", "com.main", "com.account.model"})
@EnableJpaRepositories({"com.review.model", "com.places.model", "com.main", "com.account"})
public class TravelApplication {
	public static void main(String[] args) {
		SpringApplication.run(TravelApplication.class, args);
	}
}
