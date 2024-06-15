const http = require("http");

const PORT = 8080;
const server = http.createServer((req, res) => {
  res.end("Hello world");
});
server.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`)
});