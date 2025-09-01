const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/sprachtrainer', { useNewUrlParser: true, useUnifiedTopology: true });

app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('Willkommen zur Sprachtrainer App API!');
});

app.listen(PORT, () => {
    console.log(`Server läuft auf Port: ${PORT}`);
});