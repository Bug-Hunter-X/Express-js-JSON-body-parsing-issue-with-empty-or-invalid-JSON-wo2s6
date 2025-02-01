const express = require('express');
const app = express();
app.use(express.json());
app.post('/data', (req, res) => {
  try {
    if (req.body === undefined || Object.keys(req.body).length === 0) {
      return res.status(400).send('Request body is empty or invalid');
    }
    console.log(req.body);
    // Process the request body here
    res.send('Data received');
  } catch (error) {
    console.error('Error parsing JSON:', error);
    res.status(400).send('Invalid JSON format');
  }
});
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});