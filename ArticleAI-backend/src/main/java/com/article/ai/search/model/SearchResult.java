package com.article.ai.search.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Document(collection = "searchResults")
public class SearchResult {
	
	@Id
	private String id;
	private String query;
	private String articleText;
}
