exports.getAllProducts = function(req,res){
	res.send([{name:"product1"},{name:"product2"}]);
}