package com.article.ai.search.service;

import com.article.ai.search.model.SearchResult;

public interface SearchResultService {
	
	public SearchResult saveSearchResult(String query);
	
	public SearchResult getSearchResultById(String id);

}
