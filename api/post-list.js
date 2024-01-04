const app = require('../app');
const route = require('../routes/post-list');

app.use('/api/', route);

module.exports = app;
