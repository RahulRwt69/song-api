const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://rahulrawat4995:Sandeep%402257@songcluster.zygegdl.mongodb.net/CSong",
{
    
}).then(() => {
    console.log("connection successful");
}).catch((e) => {
    console.log("no connection");
})