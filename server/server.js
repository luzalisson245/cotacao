const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const config = require('./config/keysConfig.js');
const TaskRoutes = require('./routes/Tasks.js');
const cors = require('cors');

const app = express();

mongoose.connect(config.mongodbUri, { useNewUrlParser: true })
    .then(() => console.log('Database connected'))
    .catch((err) => console.log('Error on connection', err));

//mongoose.set('useFindAndModify', -1);

app.use(bodyParser.json());
app.use(cors());

app.use('/api/tasks', TaskRoutes);

const port = process.env.PORT || 27017;

app.listen(port, function () {
    console.log('Server listening on port ' + port);
});