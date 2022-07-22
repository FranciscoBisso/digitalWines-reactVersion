const express = require("express");
const app = express();
const path = require("path");
const router = express.Router();
const mainApiRouter = require("./apiRoutes/mainApiRouter");

app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));
app.use("/api", mainApiRouter);

app.listen(3001, () => {
    console.log("Server working in PORT 3001");
});
