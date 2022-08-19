const mongoose = require('mongoose');

const URL = 'mongodb://localhost:27017/tasks';

mongoose.connect(URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('DB connected'))
    .catch(err => console.log(err));

module.exports = mongoose;