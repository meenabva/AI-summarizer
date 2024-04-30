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
	public String saveSearchResult(String query) {
		Optional<SearchResult> optionalSearchResult = searchResultRepository.findSearchResultByQuery(query);
		
		if(optionalSearchResult.isPresent()) {
			return optionalSearchResult.get().getId();
		} 
		
		SearchResult savedSearchResult = searchResultRepository.save(geminiAIClient.promptGeminiAI(query));
		
		return savedSearchResult.getId();
	}

	@Override
	public SearchResult getSearchResultById(String id) {
		return searchResultRepository.findById(id).orElseThrow();
	}
	
}