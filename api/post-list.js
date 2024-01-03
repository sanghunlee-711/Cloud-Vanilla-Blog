const app = require('../server');
const route = require('../routes/post-list');

app.use('/api/', route);

module.exports = app;
