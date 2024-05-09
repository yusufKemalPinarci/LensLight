import express from 'express';
import dotenv from "dotenv";
import conn from "./db.js"
import pageRoute from "./routes/pageRoute.js"

dotenv.config()

conn()



const app=express()
const port =3000


app.set("view engine","ejs")

app.use(express.static('public'))


/* app.get(`/`,(req,res)=>{
    res.render("index");
})

app.get(`/about`,(req,res)=>{
    res.render("about");
}) */

app.use("/",pageRoute);

app.listen(port,()=>{
    console.log(`application running ${port}`)
})