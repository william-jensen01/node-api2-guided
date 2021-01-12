const express = require('express');
const adopterRouter = require('./adopters/adopters-router.js')
const server = express();

server.use(express.json());
server.use('/api/adopters', adopterRouter)
server.use('/')

// OTHER ENDPOINTS
// OTHER ENDPOINTS
// OTHER ENDPOINTS
server.get('/', (req, res) => {
  res.send(`
    <h2>Lambda Shelter API</h>
    <p>Welcome to the Lambda Shelter API</p>
  `);
});

// we expose the server
module.exports = server
