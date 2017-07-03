1. How to use system:
-Open Chrome browser
-Navigate to https://nwen304groupseven.herokuapp.com/

2. REST interface:
-GET for routing between webpages
-GET for OAuth authentication using Facebook Strategy
-POST for searching, register and login

3. Error handling:
-On app startup check if database is connected, throw error if database connection fails
-On register check request body exists, throw status 400 if request body is missing
-On register check that query was successful, if error on query throw status 400
-On login check request body exists, throw status 400 if request body is missing
-On search check request body exists, throw status 400 if request body is missing
