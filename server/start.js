const app = require('./index.js');
const port = 3002;

app.listen(port, () => {
  console.log(`server running at: http://localhost:${port}/:id`);
});