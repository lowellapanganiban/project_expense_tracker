const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const PORT = 8000;
const app = express();

app.use(bodyParser.json());
//Database connection
mongoose.connect('mongodb://localhost:27017/expense-tracker-db');


 app.get('/', (request, response ) => {
    response.send(`Welcome to your Express App!`);
});

//Router import
const loginRouter = require('./routes/login');
const signupRouter = require('./routes/signup');

//Router endpoints
app.use('/api/v1/login', loginRouter);
app.use('/api/v1/signup', signupRouter);

app.listen(
    PORT,
     () => { console.log(`App is runningon port ${PORT}.`);
    });