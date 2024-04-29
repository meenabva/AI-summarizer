package com.article.ai.search.model.request;

import java.util.ArrayList;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.RequiredArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class Content {

	private List<Part> parts;
	
	public Content(String text) {
		List<Part> parts = new ArrayList<>();
		parts.add(new Part(text));
		this.parts = parts;
	}

	@Data
	@NoArgsConstructor
	@AllArgsConstructor
	@JsonIgnoreProperties(ignoreUnknown = true)
	public class Part {
		private String text;
	}
}
