const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

require("dotenv").config();

const app = express();
const port = process.env.PORT;

const corsOptions = {
	origin: ["http://localhost:3000", "https://exercizer.ivona.se/" ],
};

app.use(cors(corsOptions));
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri);
const connection = mongoose.connection;
connection.once("open", () => {
	console.log("MongoDB connection established successfully");
});

const exercisesRouter = require("./routes/exercises");
const usersRouter = require("./routes/users");

app.use("/exercises", exercisesRouter);
app.use("/users", usersRouter);

app.listen(port, () => {
	console.log(`Server is running on port: ${port}`);
});
