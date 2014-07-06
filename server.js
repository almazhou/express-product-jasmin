var express = require('express'),
product = require('routes/products');
 
var app = express();

app.route('/products/')
.get(product.getAllProducts())
.post(product.addProduct())

app.listen(3000);
console.log("Listening on port 3000...");