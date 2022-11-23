const express = require('express')

const cors = require('cors')

const dataservice = require('./services/dataservice')

const app = express()

app.use(cors({
    origin:'http://localhost:4200'
}))

//request  come from client so parse
app.use(express.json())

app.listen(3002,()=>{
    console.log('Server Started at Port 3002');
})

//api to get all products
app.get('/all-products',(req,res)=>{
    dataservice.getProducts()
    .then((result)=>{
        res.status(result.statusCode).json(result)
    })

})