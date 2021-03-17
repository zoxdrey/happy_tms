const express = require('express');
const config = require('config');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

app.use(cors());
app.use('/api/auth', require('./routes/auth.routes'))
const PORT = config.get('port') || 5000;
const MONGOURI = config.get('mongoUri') || "mongodb://localhost:27017/";

async function start() {
    try {
      await mongoose.connect(MONGOURI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true
      });
    } catch(e) {
        console.log('Server error', e.message);
        process.exit(1);
    }
}

start();

app.listen(PORT, () => console.log(`server start ${PORT}`));

