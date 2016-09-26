import path from 'path';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware'; //required to work with node
import config from './webpack.config';
import Express from 'express';
import bodyParser from 'body-parser'
import knex from 'knex';
import db from './web/db';

const app = new Express();
const port = 3000;
const compiler = webpack(config);
const apiRoutes = require('./web/router.js');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}))

console.log('router', apiRoutes);

app.use('/api',apiRoutes );
// api+sendanswers
app.use(webpackDevMiddleware(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath,
}));


app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname, 'index.html'))
});



/*
var messages = []
app.post('/sendMessage', function(req,res, err){
  console.log('send message');
  messages.push(req.body);
  console.log(messages)
  res.sendStatus(201)
});

*/




app.listen(port,error => {
    if (error) {
        console.error(error);
    } else {
        console.log("Listening on port", port)
    }
});
