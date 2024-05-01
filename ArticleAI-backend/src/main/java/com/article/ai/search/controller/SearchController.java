package com.article.ai.search.controller;

import java.io.IOException;
import java.security.GeneralSecurityException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.article.ai.search.model.SearchResult;
import com.article.ai.search.service.GeminiAiClient;
import com.article.ai.search.service.SearchResultService;

import jakarta.websocket.server.PathParam;
import lombok.extern.log4j.Log4j2;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
@Log4j2
public class SearchController {
	
	@Autowired
	private SearchResultService searchResultService;
	
	@PostMapping
	public ResponseEntity<String> saveSearch(@RequestParam String query) throws GeneralSecurityException, IOException{
		try {
			return ResponseEntity.ok(searchResultService.saveSearchResult(query));
		} catch (Exception e) {
			log.debug("Error while getting response from Gemini API: {}", e);
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	
	@GetMapping("/{id}")
	public ResponseEntity<SearchResult> getSearchById(@PathVariable String id) {
		try {
			return ResponseEntity.ok(searchResultService.getSearchResultById(id));
		} catch (Exception e) {
			log.debug("Error while fetching summary by ID: {}", e);
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}
}
