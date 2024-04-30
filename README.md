# AI-Topic-Summarizer
Application that generates a summary based on a given topic

## Overview

The AI Topic Summarizer application generates a summary with reference links for a given topic. The application uses the Gemini AI API to generate the summary.
Each unique query generates a shareable link with the topic summary. 

The application uses Springboot for the backend, MongoDB to store the summaries and React for the frontend. 

## Features

- Fetches Summary on topic from Gemini AI API.
- Generates a shareable link with the summary.

## Tech Stack

- Springboot
- React
- MongoDB

## Installation

1. Clone the repository:

```bash
git clone https://github.com/meenabva/AI-Topic-Summarizer
```
2. Replace the database details and API details in the application.properties file
   
3. Build and Run the backend of the project:

```
cd AI-Topic-Summarizer/ArticleAI-backend
mvn clean install
java -jar target/ArticleAI-backend.jar
```

4. Run the frontend of the project:

```
cd ai-summarizer-app
npm install
npm run dev
```


