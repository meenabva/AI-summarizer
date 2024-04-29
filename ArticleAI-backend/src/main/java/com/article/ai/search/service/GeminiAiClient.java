package com.article.ai.search.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;
import org.springframework.web.client.RestTemplate;

import com.article.ai.search.controller.InternalServerException;
import com.article.ai.search.model.request.GeminiAiRequest;
import com.article.ai.search.repository.SearchResultRepository;
import com.article.ai.search.model.GeminiAiResponse;
import com.article.ai.search.model.SearchResult;
import com.google.cloud.vertexai.api.GenerateContentResponse;

import lombok.extern.log4j.Log4j2;

@Component
@Log4j2
public class GeminiAiClient {

	@Autowired
	private RestTemplate restTemplate;
	
	@Autowired
	private SearchResultRepository searchResultRepository;
	
	@Value("${gemini.apiKey}")
	private String apiKey;

	//@Value("${gemini.api.url}")
	private String apiUrl = "https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent";

	public SearchResult promptGeminiAI(String query) {
		
		String prompt = "Write a 1000 word summary on the topic" + query + " with references ";

		GeminiAiRequest geminiAiRequest = new GeminiAiRequest(prompt);

		//GenerateContentResponse geminiAiResponse = restTemplate.postForObject(apiUrl + "?key=" + apiKey, geminiAiRequest, GenerateContentResponse.class);
		GeminiAiResponse geminiAiResponse = restTemplate.postForObject(apiUrl + "?key=" + apiKey, geminiAiRequest, GeminiAiResponse.class);
		//log.debug("response: {}", geminiAiResponse.toString());
		if (geminiAiResponse == null || geminiAiResponse.getCandidates().get(0) == null
				|| geminiAiResponse.getCandidates().isEmpty()) {
			throw new InternalServerException("No response received from Gemini API");
		}
		
		String text = geminiAiResponse.getCandidates().get(0).getContent().getParts().get(0).getText();
		int titleIndex = text.indexOf("\n");
		
		SearchResult searchResult = new SearchResult();
		searchResult.setArticleText(text);
		searchResult.setQuery(query);
		
		searchResult = searchResultRepository.save(searchResult);

		return searchResult;
	}
}