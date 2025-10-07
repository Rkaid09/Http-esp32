const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// In-memory message store (deviceID -> message)
const messages = {
  'esp32-001': 'Hello from server to ESP32!'
};

app.get('/getMessage', (req, res) => {
  const deviceID = req.query.deviceID;
  if (!deviceID) {
    return res.status(400).json({ error: 'deviceID missing' });
  }
  const message = messages[deviceID] || 'No new messages';
  res.json({ message: message });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
