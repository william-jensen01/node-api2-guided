const express = require('express');
const adopterRouter = require('./')
const server = express();

server.use(express.json());
server.use('/api/adopters', adopterRouter)

const Dog = require('./dogs/dogs-model');

// DOGS ENDPOINTS
// DOGS ENDPOINTS
// DOGS ENDPOINTS
server.get('/api/dogs', (req, res) => {
  Dog.find()
    .then(dogs => {
      res.status(200).json(dogs);
    })
    .catch(error => {
      console.log(error);
      res.status(500).json({
        message: 'Error retrieving the dogs',
      });
    });
});

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
