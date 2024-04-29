package com.article.ai.search.repository;

import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.article.ai.search.model.SearchResult;

public interface SearchResultRepository extends MongoRepository<SearchResult, String> {

	public Optional<SearchResult> findSearchResultByQuery(String query);
	
}
