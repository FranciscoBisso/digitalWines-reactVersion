const express = require("express");
const app = express();
require("dotenv").config();

const path = require("path");

const usersApiRouter = require("./routes/usersApiRouter");
const winesApiRouter = require("./routes/winesApiRouter");
const wineriesApiRouter = require("./routes/wineriesApiRouter");
const varietalsApiRouter = require("./routes/varietalsApiRouter");
const categoriesApiRouter = require("./routes/categoriesApiRouter");
const port = process.env.PORT || 3001;

const methodOverride = require("method-override");
const cors = require("cors");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "../public")));
app.use(methodOverride("_method"));
app.use(cors({ origin: "*" }));

app.use("/api/users", usersApiRouter);
app.use("/api/wines", winesApiRouter);
app.use("/api/wineries", wineriesApiRouter);
app.use("/api/varietals", varietalsApiRouter);
app.use("/api/categories", categoriesApiRouter);

app.listen(port, () => {
	console.log(`SERVER RUNNING IN PORT: ${port}`);
});
