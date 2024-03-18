const express = require("express");
const path = require("path");
const dotenv = require("dotenv");
const bp = require("body-parser");
const fileupload = require("express-fileupload");
const {connectDB}=require("./config/dbConfig")

const app = express();
const PORT =  2000;

dotenv.config();

// Serve static files
app.use("/uploads", express.static('uploads'));
app.use(express.static(path.join(__dirname, "..", "reactproj", "build")));

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(fileupload());



// Routes
const userrouter = require("./routers/user.router");
const clientrouter = require("./routers/client.router");
const providerrouter = require("./routers/provider.router");

app.use("/user", userrouter);
app.use("/client", clientrouter);
app.use("/provider", providerrouter);

// Serve React app
app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "..", "reactproj", "build", "index.html"));
});


// Start server

const Start=async()=>{
    try{
        await connectDB(process.env.MONGODB_URL) ;
        app.listen(PORT, () => {
            console.log(`Server started on port ${PORT}`);
        });

    }
    catch(err){
        console.error("Error occured!! :"+err)
    }
}
Start();
