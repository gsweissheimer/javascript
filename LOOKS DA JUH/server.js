const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const morgan = require('morgan');
const requireDir = require('require-dir');

//iniciando o app

const app = express();

app.use(express.json());
app.use(express.urlencoded( { extended: true } ));
app.use(morgan("dev"));

app.use(cors());

//iniciando o db
mongoose.connect('mongodb+srv://jude:Jud31902@cluster0.wfejt.mongodb.net/jude?retryWrites=true&w=majority', {

    useNewUrlParser: true,
    useUnifiedTopology: true

});

requireDir('./src/models');

app.use('/api', require('./src/routes'));

app.listen(3001);