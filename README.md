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

1. Clone the repository
```sh
git clone https://github.com/suyashvsingh/weather.git
```

2. Create .env file

In the root folder, create a new _.env_ file

```
REACT_APP_URL=https://api.openweathermap.org/data/2.5/weather?units=metric
REACT_APP_WEATHER_API_KEY=[Your API key here]
```

3. Install dependencies

```sh
cd client
npm install
```

```sh
cd server
npm install
```

4. Run the server

```sh
cd server
npm run dev
```

5. Run the client

```sh
cd client
npm run dev
```