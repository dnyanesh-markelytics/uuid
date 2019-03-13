// Import packages
const express = require('express')
const morgan = require('morgan')
const si = require('systeminformation');
// App
const app = express()
// Morgan
app.use(morgan('tiny'))
// First route
app.get('/uuid', async (req, res) => {
   await si.uuid()
   .then(posts => res.json(posts))
   .catch(err => {
       console.log(err);
   })
})

// Starting server
app.listen('1337')
