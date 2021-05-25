const express = require("express");
const logger = require("morgan");

const indexRouter = require("./routes/indexRouter");
const gameRouter = require("./routes/gameRouter");

const app = express();

app.use(logger("dev"));
app.use(express.json());

app.use("/", indexRouter);
app.use("/api/game", gameRouter);

// app.listen(3000, function () {
//   console.log(`Server is running on port 3000`);
// });

module.exports = app;
