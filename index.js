const server = require('./api/server.js')

// we take this out
server.listen(4000, () => {
  console.log('\n*** Server Running on http://localhost:4000 ***\n');
});
