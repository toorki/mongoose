const express=require('express')
const connectDB = require('./config/connectDB')
const user = require('./modules/userSchema')




const app=express()

connectDB()
const addUser=async()=>{
    const laroussi=new user({name:'laroussi', age:29, classes:["html","css","js"]})
    await laroussi.save()
}
//addUser()
const addUser1=async()=>{
    const torki=new user({name:'torki', age:26, classes:["reactjs", "nodejs"]})
}

const updateUser=async()=>{
    await user.findByIdAndUpdate('',{$set:{name:'larou'}})
}

const deleteUser=async()=>{
    await user.findByIdAndDelete('')
}


//laroussi:<password>@cluster0.uodceh9.mongodb.net/?retryWrites=true&w=majority+srv://laroussi:<password>@cluster0.uodceh9.mongodb.net/?retryWrites=true&w=majority