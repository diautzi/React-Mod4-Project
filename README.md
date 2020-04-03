# Winner's Circle Trivia Game App
![Trivia Game](https://github.com/diautzi/React-Mod4-Project/blob/master/Trivia%20Game.png)

Generates up to a 4-players game with 20 random questions. Fetches from Open Trivia Database API & posts correct answer & displays winner at the end of the game. 

## Technical details and Resources


- FrontEnd : React and Semantic UI.
- BackEnd: Rails Api.
- PostgreSQL database.
- Developed a Ruby on Rails API backend with 4 different endpoints: for users, game, round
- Used serializer to format the JSON file.
- APIs:  Open Trivia Database API

## Installation
- Fork and clone the project: https://github.com/diautzi/React-Mod4-Project.
- Have Ruby, Rails and Node.js installed.
- Cd into **backend:** and run:
```
$bundle install
$rails db:create
$rails db:migrate
$rails s 
```
The server will start on http://localhost:3000

- In your terminal **cd ..** back into apps root folder, and then **cd frontend** into the frontend folder to start and run the app:
```
$npm install
$npm start
```
The app will run on http://localhost:3001

## Demo
[Trivia Game Demo](https://github.com/diautzi/React-Mod4-Project/blob/master/demo.mov)
**Spoiler Alert** In my game demo, the score is tied, so that's why we have 2 winners :)



