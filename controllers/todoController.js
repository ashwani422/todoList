let mysql = require('mysql');
let bodyParser = require('body-parser');    //to handle the POST requests comming from a form

let con = mysql.createConnection({  //to connect to the database
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'todolist'
});

con.connect(function(err){
    if(err) throw err;

    console.log('Connected to the database.');

});

let urlEncodedParser = bodyParser.urlencoded({extended: false}); //to handle url encoded data only

module.exports = function(app){

    app.get('/index', function(req, res){

        
            
        let sql = 'SELECT * FROM items';

        con.query(sql, function(err, result){
                
            if(err) throw err;

            res.render('index', { show: result });  
        });

        
        
    });

    app.post('/index', urlEncodedParser, function(req, res){
               
        let newItem = req.body.item;
            
        let sql = `INSERT INTO items(item) VALUES('${newItem}')`;

        con.query(sql, function(err, result){
                
            if(err) throw err;

            console.log(`"${newItem}" added successfully.`);
        });
        
    });

    app.delete('/index/:element', function(req, res){
        
        let sql = `DELETE FROM items WHERE item="${req.params.element}"`;

        con.query(sql, function(err, result){
            if(err) throw err;

            console.log(`"${req.params.element}" has been deleted successfully.`);
        });

    });

};