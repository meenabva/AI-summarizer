package com.article.ai.search.model.request;

import java.util.ArrayList;
import java.util.List;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class GeminiAiRequest {
	
	private List<Content> contents;
	
	private GenerationConfig generationConfig;
	
	public GeminiAiRequest(String prompt) {
		List<Content> contents = new ArrayList<>();
	    contents.add(new Content(prompt));
	    this.contents = contents;
	}

	@Data
	@AllArgsConstructor
	@NoArgsConstructor
	class GenerationConfig {
		private long maxOutputTokens = 10000;
	}
	    
}
