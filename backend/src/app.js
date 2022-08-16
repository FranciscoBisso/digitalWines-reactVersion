const express = require("express");
const app = express();
const path = require("path");
const router = express.Router();
const mainApiRouter = require("./routes/mainApiRouter");
const winesApiRouter = require("./routes/winesApiRouter");
const methodOverride = require("method-override");
const cors = require("cors");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "../public")));
app.use(methodOverride("_method"));
app.use(cors({ origin: "*" }));

app.use("/api", mainApiRouter);
app.use("/api/wines", winesApiRouter);

app.listen(3001, () => {
    console.log("Server working in PORT 3001");
});
