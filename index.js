const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const cors = require('cors');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

app.post('/explain', async (req, res) => {
  try {
    const { code } = req.body;
    console.log('Received code:', code);

    const response = await axios.post('http://localhost:11434/api/generate', {
      model: 'llama3',
      prompt: `Explain the following code:\n\n${code}`,
      stream: false
    });

    res.json({ result: response.data.response });

  } catch (err) {
    console.error('Internal error:', err?.response?.data || err.message);
    res.status(500).json({ error: 'Internal Server Error: ' + err.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
