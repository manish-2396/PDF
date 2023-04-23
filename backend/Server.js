const http = require("http");
const { server } = require("./DataBase/db");
const { log } = require("console");

const HTTPSServer = http.createServer();

HTTPSServer.listen(8080, async () => {
  try {
    await server;
    console.log("http://localhost:8080/");
  } catch (err) {
    console.log("not connected");
  }
});
