const app = require('../app');
const route = require('../routes/post');

app.use('/api', route);

module.exports = app;
