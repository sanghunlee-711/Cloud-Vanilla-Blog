const app = require('../app');
const route = require('../routes/post-latest');

app.use('/api/', route);

module.exports = app;
