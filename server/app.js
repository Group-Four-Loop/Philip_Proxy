const express = require('express');
const app = express();
const port = 4000;
const cors = require('cors');
const path = require('path');

//Middleware
app.use(express.static(path.join(__dirname, '../client')));

app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
// app.use(cors());

// http://13.57.207.50:3333/


//Route paths
app.get('/items', (req, res) => {
  //could have your axios.get() here, which would avoid CORS errors
  res.redirect('http://54.219.237.16:1235')
})

//GET request to the items endpoint
//we want to get that data back from the endpoint.
//send data back to client

app.get('/shoppingcart', (req, res) => {
  res.redirect('http://13.57.207.50:3333' + req.url)
})

app.get('/api/looks', (req, res) => {
  res.redirect('http://3.101.47.20:3000' + req.url)
})

//need to serve static index.html file


// redictecting to the servers that we're using
//lan8080
//harrison3000 - mimic these routes in your proxy


app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))