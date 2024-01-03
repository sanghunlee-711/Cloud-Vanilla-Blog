const app = require('../server');
const route = require('../routes/post-latest');

app.use('/api/', route);

module.exports = app;
