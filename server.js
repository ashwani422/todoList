let express = require('express');

//custum module
let todoController = require('./controllers/todoController.js');

let app = express();

app.listen('5000', function(){
    console.log('Server is running on localhost:5000/index');
});

app.set('view engine', 'ejs');  //to set the ejs files
app.use(express.static('./public'));  //to use static files like css and images etc.


todoController(app);    //to create MVC structure
