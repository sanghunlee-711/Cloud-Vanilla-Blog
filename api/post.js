const app = require('../server');
const route = require('../routes/post');

app.use('/api', route);

module.exports = app;
