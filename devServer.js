const app = require('./app');
const routes = require('./routes/router');
const pageRoutes = require('./routes/pages/index');

app.use('/', pageRoutes); //for SSR frontend
app.use('/api/', routes); //for API backend

//start server locally
app.listen(4000, function () {
  console.log('Server started. Go to http://localhost:4000/');
});
