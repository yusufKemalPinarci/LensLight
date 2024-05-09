import mongoose from "mongoose";

const conn= ()=>{
    mongoose.connect(process.env.DB_URI,{
        dbName:"veritabani",
        useNewUrlParser:true,
        useUnifiedTopology:true
    }).then(()=>{
        console.log("veritabanina başarı ile bağlandı")
    }).catch((err)=>{
        console.log(`veri tabanına bağlanmada hata var ${err}`)
    })
}

export default conn;