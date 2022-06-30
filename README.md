# How to Use

## Get your API key

* Go to https://openweathermap.org/api.
* Create an account if necessary.
* Go to *Current Weather Data* and click on *Subscribe*.
* Click on *Get API key* under *Free*.
* Then go to https://home.openweathermap.org/api_keys, and find your API key there.

## Cloning the repository

Clone the repository by the command ``` git clone https://github.com/suyashvsingh/weather.git ```

## .env.local file 

* In the root folder, create a new *.env.local* file
* In the file, type the following lines:
```
REACT_APP_URL=https://api.openweathermap.org/data/2.5/weather?units=metric
REACT_APP_WEATHER_API_KEY=[Your API key here]
```

## Installing dependencies

* Come to root folder and run ``` npm i ``` command to install all the dependencies
* Enter the *frontend* folder and run ```npm i``` again

## Running the React App (Dev Mode)

* In the root folder, run ``` npm run dev ``` command.
* The app will start running at http://localhost:3000

## Running the React App (Production Mode)

* In the root folder, run ``` npm start ``` command.
* The app will start running at http://localhost:5000

## Live Demo

https://svs-weather.herokuapp.com/
