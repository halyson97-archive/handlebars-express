function ExampleControllers(){}

ExampleControllers.prototype.example = function(req, res, next) {
  res.status(200).send('example'); 
}

module.exports = new ExampleControllers();