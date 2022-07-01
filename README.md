
My marvel web app 🦸‍♂️
===
[![forthebadge](https://forthebadge.com/images/badges/made-with-typescript.svg)](https://forthebadge.com)

&nbsp;

## Introduction

**Why this project ?**

It's a personal project in the purpose of developing my skill to well using and display a complex API and as big fan of Marvel Comics I have decided to using the official Mavel API

&nbsp;

**Description :**

This web app is built in React, Nodejs and styling with sass and is a glossary of all Character, Comics and Creators of Marvel Comics.

&nbsp;

## Start the project

**First Method : hosting link**

1. Just go to the hosting link : [Marlv-app](http://marvelapp.dev.raphaelsaverys.com/) 
2. Wait that the application is started. (take few seconds)

&nbsp;

**Second Method : Locally**

1. First, please create a free marvel dev account at [Marvel Developer Portal](https://developer.marvel.com/) for acquire your own public and private API key. 
2. Create an `.env` file in the **root** folder, with the information entered in the [``.template.env``](./.template.env) file :
```
REACT_APP_MARVEL_API_PUBLIC_KEY="YourMarvelApiPublicKey"
REACT_APP_MARVEL_API_PRIVATE_KEY="YourMarvelApiPrivateKey"
```
3. Open the terminal and go to the ap repository root folder.
4. Run the following command using npm or yarn :

Npm
```properties
npm i
npm start
```
Yarn
```properties
yarn
yarn start
```

&nbsp;

**Third Method : Docker**

1. First, please do the two first step of the previous method.
2. Mount the container :
```properties
docker-compose up -d
```
* Remove the container and volumes created :
```properties
docker-compose down -v
```
