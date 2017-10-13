const express = require('express'),
      cors = require('cors'),
      bodyParser = require('body-parser'),
      massive = require('massive'),
      ctrl = require('./products_controller');
      
      require('dotenv').config();

const app = express();
app.use( bodyParser.json() );
app.use( cors() );
massive(process.env.CONNECTION_STRING).then(db =>{
    app.set('db', db)});


const port = process.env.PORT || 8080
app.listen( port, () => console.log(`You are listening to a server on port ${port}!`))