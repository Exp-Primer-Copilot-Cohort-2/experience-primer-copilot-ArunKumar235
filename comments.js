// Create web server and listen on port 3000
// Use express to create a web server
const express = require('express');
const app = express();
const PORT = 3000;

// Create a route for the home page
app.get('/', (req, res) => {
  res.send('Welcome to the home page!');
});

// Create a route for the comments page
app.get('/comments', (req, res) => {
  res.send('Welcome to the comments page!');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

// Run the code using node comments.js
// Open a web browser and go to the URL http://localhost:3000
// You should see the message Welcome to the home page!
// Now go to the URL http://localhost:3000/comments
// You should see the message Welcome to the comments page!