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
    console.log('massive works')
    app.set('db', db)});


app.get('/api/shelf/:id');

app.get('api/bin/:id');

app.put('/api/bin/:id');

app.delete('/api/bin/:id');

api.post('/api/bin/:id');

const port = process.env.PORT || 8080
app.listen( port, () => console.log(`You are listening to a server on port ${port}!`))