// ./src/index.js

const { port } = require("./config/config.system");

const app = require("./server");

app.listen(port, () => console.log("server starting on port 3000!"));
