const mongoose = require("mongoose");

const mongoURI = "mongodb+srv://kevin_222:Kevin_222@clusterdemo.jedyn8n.mongodb.net/?retryWrites=true";

const connectToMongo = ()=>{
    mongoose.connect(mongoURI)
    .then(console.log("Connected to MongoDB successfully"))
    .catch( err => console.log(err))
}

module.exports = connectToMongo;

