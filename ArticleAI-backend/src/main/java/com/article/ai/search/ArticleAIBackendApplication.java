package com.article.ai.search;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;
import org.springframework.web.client.RestTemplate;

@SpringBootApplication
@EnableMongoRepositories
public class ArticleAIBackendApplication {

	public static void main(String[] args) {
		SpringApplication.run(ArticleAIBackendApplication.class, args);
	}
	
	 @Bean
	 public RestTemplate restTemplate() {
		 return new RestTemplate();
	  }

}
