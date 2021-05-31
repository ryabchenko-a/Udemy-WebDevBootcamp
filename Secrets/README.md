# Secrets
![Secrets](https://user-images.githubusercontent.com/61123874/120181616-9a0f7600-c20d-11eb-9c49-98a980abba18.png)

This folder contains the source code for Secrets App. This website allows to anonymously share your secret - everybody will see it, but nobody knows whose this secret is.  

To share a secret, you need to create an account or sign up via google. 

# Running Localy
This is folder contains the version of app that is meant to be running on the local server. You can also look at a web version [here](https://secrets-udemy.herokuapp.com/).

To run the app localy:
1. Download the folder
2. [Install mongoDB database](https://docs.mongodb.com/manual/installation/) and run it
3. Install dependencies by running the command below in your terminal  
  `cd [PATH TO THE APP]`  
  `npm install`
4. Start the server with nodemon by running the command below in your terminal  
  `nodemon app.js `
5. Open the app by typing `localhost:3000` in your browser.  


Note: the app uses Angela Yu (instructor) google OAuth credentials.

If you want to deploy it on the web, you will need to deploy the database and the app on the respective hosts. To do so, follow these guidelines
- [deploying your website with Heroku](https://devcenter.heroku.com/categories/deployment) and [deploying your database with mongoDB Atlas](https://docs.atlas.mongodb.com/getting-started/). Shall you want to change OAuth credentials, look at [this article](https://developers.google.com/identity/protocols/oauth2).

# Feedback
Shall you have any questions or find any inconsistencies in code, please contact me at LinkedIn or open an issue.
