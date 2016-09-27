import db from './db';
const router = require('express').Router()


router.post('/sendanswers', function (req, res) {
	console.log('_-----',req.body.result)
  // use insert to add item into DB
  db.insert({
    result:req.body.result})
  .into('Survey')
  .then(function(){
    res.send('working');
  });
})

router.get('/getanswers', function(req,res) {
  db.select('result').from('Survey')
  .then(function(results){
    res.send(results)
  })
})


// router.post('/sendanswers', function (req,res){
//   console.log('post working', req.body);
//   res.send('working');
//
// })

module.exports = router
