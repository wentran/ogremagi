import path from 'path';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware'; //required to work with node
import config from './webpack.config';
import Express from 'express';
import bodyParser from 'body-parser'

const app = new Express();
const port = 3000;
const compiler = webpack(config);

app.use(bodyParser.json());
// var db = require('knex')({
//   client: 'sqlite3',
//   connection: {
//     filename: 'ogremagi'
//   },
//   useNullAsDefault: true
// });
//
//
// db.schema.createTableIfNotExists('Chat', function(table){
//   table.string('message');
// }).then(function(table){
//   console.log("table created")
// })



app.use(webpackDevMiddleware(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath,
}));

app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname, 'index.html'))
});


var messages = []
app.post('/sendMessage', function(req,res, err){
  console.log('send message');
  messages.push(req.body);
  console.log(messages)
  res.sendStatus(201)
});


app.get('/getMessage', function(req,res, err){
  console.log(req.body)
  // messages.push(req.body);
  res.send(201)
});
// route when user requests their messages they had with other user
// app.get('/getMessage', requireAuth, chatController.getMessages);

app.listen(port,error => {
    if (error) {
        console.error(error);
    } else {
        console.log("Listening on port", port)
    }
});
