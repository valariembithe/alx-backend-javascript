const express = require('express');

const PORT = 1245;

const app = express();

app.get('/', (_, res) => {
  res.send('Hello Holberton School!');
});

app.listen(PORT, () => {
  console.log(`Server running on PORT ${PORT}`);
});

module.exports = app;
