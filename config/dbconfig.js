const mongoose=require("mongoose")

mongoose.connect(process.env.mongo_url)

const connection=mongoose.connection;

connection.on('error',()=>{
    console.log('error in connecting')
})

connection.on('connected',()=>{
    console.log('MONGO DB Connection Success')
})

module.exports=connection;