const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3002;

app.use(express.static(path.join(__.dirname, 'public')));

app.listen(port, () => {
  console.log(`server running at: http://localhost:${port}`);
});