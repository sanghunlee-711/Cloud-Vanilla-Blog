const app = require('./app');
const routes = require('./routes/router');
const pageRoutes = require('./routes/page-router');

app.use('/', pageRoutes);
app.use('/api/', routes);
/* app.use("/api/", routes);  //for API backend*/

//start server locally
app.listen(4000, function () {
  console.log('Server started. Go to http://localhost:4000/');
});
