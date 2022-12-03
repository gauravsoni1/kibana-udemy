const mongoose = require("mongoose");

//Connect to MongoDB Atlas
const MONGO_URI = "mongodb+srv://<username>:<password>@cluster0.jjvanng.mongodb.net/kibana-ecommerce";
if (!MONGO_URI) {
    throw new Error("You must provide the MongoDB URI");
}

mongoose.connect(MONGO_URI);
mongoose.Promise = global.Promise;
mongoose.connection
    .once("open", () => {
        console.log("connected to MongoLab instance");
    })
    .on("error", error => console.log("Error connecting to MongoDB Lab", error));


module.exports = mongoose;