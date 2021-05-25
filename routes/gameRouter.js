const express = require("express");
const router = express.Router();
const uuidv4 = require("uuid").v4;

let games = [
  {
    id: "adowb1b3bb",
    game: "League of Legends",
    description: "League of Legends is a team-based game with over 140 champions to make epic plays with.",
  },
  {
    id: "kd7b9ks2nda",
    game: "PlayerUnknown's Battlegrounds",
    description: "PLAYERUNKNOWN'S BATTLEGROUNDS is a last-man-standing shooter being developed with community feedback.",
  },
];

router.get("/", function (req, res) {
  res.json({ message: "game route!" });
});

router.get("/get-all-games", function (req, res) {
  res.json({ payload: games });
});

router.get("/get-game-by-id/:id", function (req, res) {
  let foundGameIndex = games.findIndex((item) => item.id === req.params.id);

  if (foundGameIndex === -1) {
    res.status(404).json({ message: "Game not found!" });
  } else {
    let foundGame = games[foundGameIndex];
    res.json({ payload: foundGame });
  }
});

router.get("/get-game-by-name/:name", function (req, res) {
  const { name } = req.params;

  let foundGameIndex = games.findIndex((item) => item.game === name);

  if (foundGameIndex === -1) {
    res.status(404).json({ message: "Please check name" });
  } else {
    let foundGame = games[foundGameIndex];
    res.json({ payload: foundGame });
  }
});

router.post("/create-new-game", function (req, res) {
  let { game, description } = req.body;
  if (game.length === 0 || description.length === 0) {
    res.status(500).json({ message: "cannot leave text area blank" });
  }

  //if game already exists
  let foundGameIndex = games.findIndex((item) => item.game === req.body.game);

  if (foundGameIndex > -1) {
    res.status(500).json({ message: "Sorry, the game already exists!" });
  } else {
    let newGameObj = {
      id: uuidv4(),
      game,
      description,
    };

    games.push(newGameObj);
    res.json({ payload: games });
  }
});

router.put("/update-game/:id", function (req, res) {
  const { game, description } = req.body;

  if (game.length === 0 || description.length === 0) {
    res.status(500).json({ message: "fields cannot be empty" });
  }

  const { id } = req.params;

  let foundGameIndex = games.findIndex((item) => item.id === id);

  if (foundGameIndex === -1) {
    res.status(404).json({ message: "Game not found, cannot update" });
  } else {
    games[foundGameIndex].game = game;
    games[foundGameIndex].description = description;
    res.json({ payload: games });
  }
});

router.delete("/delete-game/:id", function (req, res) {
  let foundGameIndex = games.findIndex((item) => item.id === req.params.id);

  if (foundGameIndex === -1) {
    res.status(404).json({ message: "Game not found" });
  } else {
    games.splice(foundGameIndex, 1);
    res.json({ payload: games });
  }
});

module.exports = router;
