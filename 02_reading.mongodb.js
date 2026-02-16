//Read -> FETCH

use('ecommerce');
db.products.find({name: "Wireless Mouse"});
db.contacts.find();


//GREATER THAN -> $gt 
// GREATER THEN EQUAL TO -> $gte

db.products.find({price : {$gt: 1000}})
db.products.find({price : {$gte: 1000, $lte: 3000}})

db.products.find(
    { $or: 
        [
            { category: "Electronics" }, 
            { stock: { $lt: 50 } }
        ]
    }
)




//mujhe sirf name and price hi dekhna h or kn dekhna!
db.products.find({}, { name: 1, price: 1, _id: 0 })



//pagination
db.products.find().sort({ price: -1 }).limit(2)

//ab isiko chalna ho ki 1st page me 10 dikhado next me uske next 10 dikhado so ->
db.products.find().sort({ price: -1 }).skip(0).limit(10) //pehle 10 on page 1
db.products.find().sort({ price: -1 }).skip(10).limit(10) // from index 11 to 20 on page 2 and so on
db.products.find().sort({ price: -1 }).skip(20).limit(10) 