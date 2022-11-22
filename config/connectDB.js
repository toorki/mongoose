const mongoose=require('mongoose')
const connectDB=()=>{
    mongoose.connect("mongodb+srv://laroussi:@cluster0.uodceh9.mongodb.net/?retryWrites=true&w=majority").then(()=>console.log('bd is connected')).catch((err)=>console.log(err))
}
module.exports=connectDB