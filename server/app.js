const express = require('express');
const app = express();
const port = 3000;
const cors = require('cors');
const path = require('path');

//Middleware
app.use(express.static(path.join(__dirname, '../client')));

app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
// app.use(cors());




//Route paths
app.get('/items', (req, res) => {
  
  res.redirect('http://localhost:1234/items')
})

//GET request to the items endpoint
//we want to get that data back from the endpoint.
//send data back to client

app.get('/shoppingcart', (req, res) => {
  res.redirect('http://localhost:8080' + req.url)
})

app.get('/api/looks', (req, res) => {
  res.redirect('http://localhost:3001' + req.url)
})

//need to serve static index.html file


// redictecting to the servers that we're using
//lan8080
//harrison3000 - mimic these routes in your proxy


app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))