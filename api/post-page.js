const app = require('../app');
const route = require('../routes/pages/post');

app.use('/', route);

module.exports = app;
