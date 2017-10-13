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


app.get('/api/shelf/:id', ctrl.getAllBins);

app.get('/api/bin/:id', ctrl.getOneBin);

app.put('/api/bin/:id', ctrl.updateBin);

app.delete('/api/bin/:id', ctrl.deleteBin);

// api.post('/api/bin/:id', ctrl.createNewBin);

const port = process.env.PORT || 8080
app.listen( port, () => console.log(`You are listening to a server on port ${port}!`))