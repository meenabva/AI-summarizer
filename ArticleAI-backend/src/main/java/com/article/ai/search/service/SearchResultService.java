package com.article.ai.search.service;

import com.article.ai.search.model.SearchResult;

public interface SearchResultService {
	
	public String saveSearchResult(String query);
	
	public SearchResult getSearchResultById(String id);

}
