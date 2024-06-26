const http = require('http');
const HOST = 'localhost';
const PORT = 1245;
const app = http.createServer();

/**
 * An app that calls http request
 */

app.on('request', (_, res) => {
  const responseText = 'Hello Holberton School!';

  res.setHeader('Content-Type', 'text/plain');
  res.setHeader('Content-Length', responseText.length);
  res.statusCode = 200;
  res.write(Buffer.from(responseText));
});

app.listen(PORT, HOST, () => {
  process.stdout.write(`Server running at -> http://${HOST}:${PORT}\n`);
});

module.exports = app;