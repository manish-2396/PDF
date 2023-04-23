const http = require("http");
const express = require("express");
const { server } = require("./DataBase/db");
const { PDFRouter } = require("./Route");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const path = require("path");
app.use(cors());

const HTTPSServer = http.createServer(app);
app.use(bodyParser.json());

app.use("/uploads", express.static(path.join(__dirname, "uploads")));
app.use("/", PDFRouter);
HTTPSServer.listen(8080, async () => {
  try {
    await server;
    console.log("http://localhost:8080/");
  } catch (err) {
    console.log("not connected");
  }
});
