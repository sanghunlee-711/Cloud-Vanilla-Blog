const app = require('../app');
const route = require('../routes/pages/home');

app.use('/', route);

module.exports = app;
