const path = require('path');
const webpack = require('webpack');
const express = require('express');
const fs = require('fs');
const config = require('./webpack.config');
const db = require('./queries');

const app = express();
const compiler = webpack(config);
const bodyParser = require('body-parser');

app.get('/api/keys', db.getKeys);
app.get('/api/latest-keys', db.getLatestKeys);
app.get('/api/keys/:id', db.getSingleKey);

app.get('/api/registration-properties',function(req, res){
    res.sendFile(path.join(__dirname, '/registration-properties.json'));
});

app.use(bodyParser.json());

app.use(require('webpack-dev-middleware')(compiler, {
    publicPath: config.output.publicPath
}));

app.post('/api/search/:q', function(req, res) {
    const query = req.params.q;
    console.log(query);
});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(3000, err => {
    if (err) {
        return console.error(err);
    }

    console.log('Listening at http://127.0.0.1:3000/');
});

