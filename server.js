
var express = require("express"),
    app     = express(),
    http    = require("http"),
    server  = http.createServer(app),
    port = 8000;
    mongoose = require("mongoose");
 
// Configuramos la app para que pueda realizar métodos REST (busqueda de datos en la base)
app.configure(function () {
  app.use(express.bodyParser()); // JSON parsing
  app.use(express.methodOverride()); // HTTP PUT and DELETE support
  app.use(app.router); // simple route management
});



routes = require('./routes/cars')(app); 

 
// Conexión

/*
mongoose.connect('mongodb://gonzalowtf:aereomodelismo12@ds043180.mongolab.com:43180/cars', function(err, res) {
  if(err) {
    console.log('ERROR: connecting to Database. ' + err);
  } else {
    console.log('Connected to Database');
  }
});

*/
 
// petición GET del root que sólo muestre "Hello world!"
app.get('/', function(req, res) {
  res.sendfile(__dirname + '/index.html');
});


 
// El servidor escucha en el puerto 3000
server.listen(port, function() {
  console.log("Node server running on http://localhost:8000 ");
});








// mongodump --collection tshirts --db tshirts

