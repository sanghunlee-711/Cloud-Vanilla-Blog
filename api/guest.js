const app = require('../app');
const route = require('../routes/pages/guest');

app.use('/', route);

module.exports = app;
