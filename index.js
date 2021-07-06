const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors= require('cors')
const app = express();

mongoose.connect('mongodb+srv://naweed:qwertyuiop@cluster0.wwfgr.mongodb.net/Vaccination?retryWrites=true&w=majority',{ useNewUrlParser: true,useUnifiedTopology: true });
mongoose.Promise = global.Promise;
app.use(cors());

app.use(bodyParser.json());


app.use('/api',require('./router/api'));

app.listen(process.env.port || 4000, function(){
    console.log('now listening for requests');
});