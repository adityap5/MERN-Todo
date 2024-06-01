const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const todoroute = require('./routes/todoroute');
const authRoutes = require('./routes/auth');

const app = express();
app.use(bodyParser.json());
app.use(cors());

mongoose.connect('mongodb://localhost:27017/merntodo');

const db = mongoose.connection;
db.once('open', () => console.log('Connected to MongoDB'));

app.get('/', (req, res) => res.send('Welcome to the Server'));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/todos', todoroute);
app.use('/api/auth', authRoutes);


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
