// db.schema.createTableIfNotExists('items', function(table) {
//     table.string('name');
//     table.integer('quantity');
// }).then(function (table) {
//       console.log('Created Table', table);
//     });
//
//
//
// // Retrieve all items- GET req
// app.get('/items', function (req, res) {
//   // select all from table items
// 	 db.select().table('items')
// 	// console.log('ITEMSSSSSS======',res.body)
//   .then(function(results){
//    console.log(results)
//    // then send results to requests
//    res.send(results)
//  })
// });
//
//
// // Create a new item
// app.post('/items', function (req, res) {
// 	// console.log(req.body)
//   // use insert to add item into DB
//   db.insert({
//     name:req.body.name,
//     quantity:req.body.quantity})
//   .into('items')
//   .then(function(results){
//     console.log(results)
//     res.sendStatus(201);
//   });
// })
