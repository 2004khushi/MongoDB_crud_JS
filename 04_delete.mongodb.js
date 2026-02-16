//just like update logic , it works jo update krna h uska kya unique feature h vo likhdo 


use('ecommerce');


db.products.deleteOne({name:"Wireless Mouse"})
db.products.deleteMany({category:"Electronics"})