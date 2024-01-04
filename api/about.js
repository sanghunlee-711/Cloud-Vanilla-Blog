const app = require('../app');
const route = require('../routes/pages/about');

app.use('/', route);

module.exports = app;
