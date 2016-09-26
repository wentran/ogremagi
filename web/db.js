const config = require('./config')


const db = require('knex')({
  client: 'mysql',
  connection: {
    host: config.host,
    user: config.user,
    password: config.password,
    database: config.database
  }
});

db.raw('select 1+1 as result').then(function(){
  console.log('connecting!!!!!!!')
})

db.schema.hasTable('Survey').then(function(exists){
  if(!exists){
    return db.schema.createTable('Survey', function(answer) {
      answer.increments('id').primary();
      answer.string('result', 50);
      answer.integer('price')
      console.log('Created users table');
    })
    .catch(function(err){
      console.error(err);
    });
  }
});


module.exports = db;
