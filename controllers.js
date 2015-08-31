var Car = require('./models/cars');

// obtiene las autos de la base de datos


exports.getCar = function (req, res){
	Car.find(
		function(err, car) {
			if (err){
			        res.send(err);
				
			}
			else
					res.json(car); // devuelve todas los autos en JSON
					console.log(car);
				}
			);
} ;
 



	