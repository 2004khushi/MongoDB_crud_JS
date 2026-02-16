use('ecommerce');


//update({kaha update krna h},{method to apply for update : {attribute update logic}})
db.products.updateOne({name:"Wireless Mouse"}, {$set: {ratings:4.7}})
db.products.updateMany({category:"Electronics"}, {$inc: {stock: 10}})

//directly u can add new stuff in ur array! rather then first accessing array and then going inside it!
db.products.updateOne({ name: "Wireless Mouse" },{ $push: { tags: "new" } })