var request = require('request');
describe("A suite", function() {
  it('should get 200 for get all products', function (){
    request.get('http://localhost:3000/products', function(response){
        expect(response.statusCode).toBe(200);
    });
});
});


