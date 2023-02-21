<h1 align="center">Weather App</h1>


<div align="center">
    <img src="https://user-images.githubusercontent.com/80644262/194700942-4a341fd3-75cf-42de-b2c0-18b9389c7799.png" alt="Logo" width="95%">
</div>

# Getting Started

## Get your API key

- Go to https://openweathermap.org/api.
- Create an account if necessary.
- Go to _Current Weather Data_ and click on _Subscribe_.
- Click on _Get API key_ under _Free_.
- Then go to https://home.openweathermap.org/api_keys, and find your API key there.

## Cloning the repository

Clone the repository by the command `git clone https://github.com/suyashvsingh/weather.git`

## .env.local file

- In the root folder, create a new _.env_ file
- In the file, type the following lines:

```
REACT_APP_URL=https://api.openweathermap.org/data/2.5/weather?units=metric
REACT_APP_WEATHER_API_KEY=[Your API key here]
```

## Installing dependencies

- Come to root folder and run `npm i` command to install all the dependencies
- Enter the _frontend_ folder and run `npm i` again

## Running the React App (Dev Mode)

- In the root folder, run `npm run dev` command.
- The app will start running at http://localhost:3000

## Running the React App (Production Mode)

- In the root folder, run `npm run build && npm run start` command.
- The app will start running at http://localhost:5000
