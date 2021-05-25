ONLY .gitignore node_modules\\\*

Create a simple express games app

1. Make a new directory called express-games-hw
2. Go inside express-games-hw folder
3. In terminal, Make an app.js file using touch
4. In terminal, npm init -y
5. Open folder
6. Add Express and Morgan through npm i and call them inside app.js file
7. Create a server using Express, and use logger (Morgan) in App.js (don’t forger to use .json())
8. Create a router folder.
9. Create an index router and a game router files inside the router folder then connect them in App.js (index = /, game = /api/game).
10. In terminal, npm i uuid
11. In index router:
    a. Make router and export out (module.exports = router)
    b. Make a Get "/" route that returns a json message that says "Welcome to Games info App"
12. In game router:
    a. Make router and export out (module.exports = router)
    b. Add uuid v4 to create ids for each new game data
    c. Add this dummy data to your game router (do not change anything in this array and don't add anything!, make sure this array in your!):

let games = [
{
id: "adowb1b3bb",
game: "League of Legends",
description: "League of Legends is a team-based game with over 140 champions to make epic plays with."
},
{
id: "kd7b9ks2nda",
game: "PlayerUnknown's Battlegrounds",
description: "PLAYERUNKNOWN'S BATTLEGROUNDS is a last-man-standing shooter being developed with community feedback."
}
]

d. Make a GET "/get-all-games" route that responds with the array of the dummy data.
e. Make a GET "/get-game-by-id" route that takes in a params then responds with game object info(game, id and description). If the ID is not found, then respond with "The game with the id does not exist, please check id"
f. Make a POST "/create-new-game" route that POST a new game (using req.body) and it's description. Don't forget to give it an id using uuid!. If any of the fields are empty, should respond with "cannot leave text area blank". Else should respond back with the whole games array with the new game. This should also check if there's a game that already has the same name, if the game already exists should respond with "Game already exists, cannot add game"
g. Make PUT "/update-game" route that takes in the id in the params. If there's no game with the id, respond with "game not found, cannot update". Then should check if game or description is in the req.body. If either or both are in the body, update them. Should not be able to update empty values. \\\* Using ID to find the game. Do not update ID. Can only change game and/or description.
h. Make DELETE "/delete-game" route that takes in the id in the params. Once found, delete the game. If there's no game with the id, respond with "game not found, cannot delete")

12. Add module.exports = app to the bottom of the app.js file and comment out the app.listen \\\*

EXTRA CREDIT- Make a "/get-game-by-name" route that takes in a name params, then responds with game object info(game, id and description). If the name is not found, then respond with "The game does not exist, please check name" (This is a little tricky with params and names with more than one word\*
