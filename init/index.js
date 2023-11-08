const mongoose = require("mongoose");
const initData =  require("./data.js");
const path = require("path");

const Listing = require("../models/listing.js");
const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";

main().then(()=>{
    console.log("Connected to DB");
})
.catch((err)=>{
    console.log(err);
});

async function main(){
    await mongoose.connect(MONGO_URL);
}

const initDB = async ()=>{
    await Listing.deleteMany({});
   initData.data =  initData.data.map((obj)=>({...obj,owner: "6544b0dd4528e1db3f569884"}))
    await Listing.insertMany(initData.data);
    console.log("data was initialized");
}

initDB();