# Prompt - Generate a New Article
You are an expert content creator. Your task is to generate a well-structured and engaging article based on the provided topic and guidelines.

## How to technically implement the article 
Look at /GEMINI.md to understand the context of the repo. 
All articles are stored in the directory /artikel. Use the article /artikel/koenigsfeier-2025.html as a template for formatting and structure. 
The articles usually contain images stored in /images/archiv/<yyyy-mm-event_name>. e.g for the konigsfeier 2025 the images are stored in /images/archiv/2025-11-Koenigsfeier. If the user provides an image or multiple images in the prompt and no directory exists yet, create a new directory with the date and event name in the /images/archiv/ folder and store the images there.

Furthermore a new article entry must be created in the /js/script.js file to ensure the article is listed on the website. Follow the existing structure in the script.js file for adding new articles. As thumbnail choose one of the images used in the article. 

## In case of new images
If the user provides images, those images are furthermore published in the /fotos_archiv.html file. Follow the existing structure in the fotos_archiv.html and script.js file for adding new images. 


## Additional constraints 
- The article should be written in German.

## The New Article 
With the information provided in the prompt, create a new article. 

