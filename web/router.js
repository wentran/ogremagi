// import db from './db';
const router = require('express').Router()

/*
router.post('/sendanswers', function (req, res) {
	// console.log(req.body)
  // use insert to add item into DB
  db.insert({
    answer:req.body})
  .into('Survey')
  .then(function(results){
    console.log('ayyyy')
    res.sendStatus(201);
  });
})
*/


router.post('/sendanswers', function (req,res){
  console.log('post working', req.body);
  res.send('working');

})

module.exports = router
