const express = require('express');
const routes = require('./routes/index.routes');
const app = express();

app.use('/api/v1', routes);

app.listen(3000, () => {
  console.log('app runing on port 3000');
});
