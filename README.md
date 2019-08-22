The Banktrack api can be viewed [here](https://github.com/Kshriva1/banktrack-api)

This application can be used by bankers to register their information to help users find their location on google maps.

The users can enter bank name and bank branch to get the location of the bank on google map. The user just needs to click on the GET LOCATION button.

The front-end of this application is built using REACTjs and Javascript. GOOGLE MAPS API is used to calculate the location of a bank in latitude and longitude. Google Maps API converts street address into latitude and longitude which is then used by the API to mark the location on the map and also display in words the name of the bank which is called an index.

Click on BANK in the navigation part to go to bank registration form and click on USER in navigation part to go to user form where user can enter the name of the bank and branch of the bank to get the location of the bank on the google maps.

This application can only track the location of the banks which have been registered by the bankers.

The appication can be viewed [here](https://banktrack.herokuapp.com/).

The backend of the project is built using Nodejs and Expressjs. The backend contains endpoints to register a bank and to display the location of the bank by returning the address of the bank based on its name and branch.

The database used is postgresql to store the details of the bank and heroku is used for deploying the app.
