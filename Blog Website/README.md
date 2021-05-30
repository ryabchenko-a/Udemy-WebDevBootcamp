# Blog Website
This folder contains the source code for Blog Website. This website allows to create posts, shows them on the main page with the possibility to read particular post.  

To create a new post, add /compose to the address in your address bar. To read a specific post, click on "Read more" next to it.

# Running Localy
This is folder contains the version of app that is meant to be running on the local server. You can also look at a web version [here]().

To run the app localy:
1. Download the folder
2. [Install mongoDB database]() and [activate it]()
3. Install dependencies by running the command below in your terminal  
  `cd [PATH TO THE APP]`  
  `npm install`
4. Start the server with nodemon by running the command below in your terminal  
  `nodemon app.js `
5. Open the app by typing `localhost:3000` in your browser.

If you want to deploy it on the web, you will need to deploy the database and the app on the respective hosts. To do so, follow these guidelines
- [deploying your website with Heroku]() and [deploying your database with mongoDB Atlas]().

# Feedback
Shall you have any questions or find any inconsistencies in code, please contact me at LinkedIn or open an issue.