package com.article.ai.search.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.article.ai.search.model.SearchResult;
import com.article.ai.search.repository.SearchResultRepository;

@Service
public class SearchResultServiceImpl implements SearchResultService {
	
	@Autowired
	private SearchResultRepository searchResultRepository;

	@Autowired
	private GeminiAiClient geminiAIClient;
	
	@Override
	public SearchResult saveSearchResult(String query) {
		Optional<SearchResult> optionalSearchResult = searchResultRepository.findSearchResultByQuery(query);
		
		if(optionalSearchResult.isPresent()) {
			return optionalSearchResult.get();
		} 
		
		return geminiAIClient.promptGeminiAI(query);
	}

	@Override
	public SearchResult getSearchResultById(String id) {
		return searchResultRepository.findById(id).orElseThrow();
	}
	
}