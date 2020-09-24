const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const routes = require("./routes")

const app = express();

mongoose.connect("mongodb+srv://omnistack:omnistack@cluster0-c9u5j.mongodb.net/week10?retryWrites=true&w=majority", {

    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
    
});

app.use(cors());

app.use(express.json());

app.use(routes);

//methods http: GET, POST, PUT, DELETE

// params types

// query params: request.query (Filters, Ordenations, Paginations) ex.: http://localhost/users?search=guilherme
// route params: request.params (Identify resorces in DELETE or PUT) ex.: http://localhost/users/1
// body: request.body (Data for POST or PUT)

// MongoDB

app.listen(3333);