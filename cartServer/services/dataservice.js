const db = require('./db')

//to get all the products from DB products
const getProducts = ()=>{
    return db.Product.find().then(
        (result)=>{
            if(result){
               return{
                status:true,
                statusCode:200,
                products:result
               }
            }
            else{
                return{
                    status:false,
                    statusCode:404,
                    products:'No Products Found!!'
                   }
            }
        }
    )
}

module.exports = {
    getProducts
}