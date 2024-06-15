const http = require("http");

const PORT = process.env.PORT || 4000;
const server = http.createServer((req, res) => {
  res.end("Hello world");
});
server.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`)
});