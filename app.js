const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");


const app = express();

app.set('view engine','ejs');
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

mongoose.connect("mongodb://localhost:27017/userinfoDB", {useNewUrlParser:true});




const clubschema=new mongoose.Schema ({
  name: String
});
const postschema = new mongoose.Schema( {
  content:String
});
const userSchema = new mongoose.Schema( {

  username : String,
  bio :String,
  firstname:String,
  lastname:String,
  branchname:String,
  address:String,
  emailId:String,
  phoneno:Number,
  birthday:Number,
  birthmonth:Number,
  birthyear:Number,
  // clubs:clubschema,
  // post:postschema
});

const User = mongoose.model("User", userSchema);
const Club = mongoose.model("Club", clubschema);
const Post = mongoose.model("Post", postschema);



app.post("/",function(req,res){
  const username= req.body.username;
  const bio = req.body.bio;
  const fname = req.body.firstname;
  const lname = req.body.lastname;
  const branchname = req.body.branchname;
  const address = req.body.address;
  const emailId= req.body.emailId;
  const phoneno = req.body.phoneno;
  const clubname = req.body.clubname;
  const birthday =req.body.birthday;
  const birthmonth =req.body.birthmonth;
  const birthyear =req.body.birthyear;

  const user = new User({
    username : username,
    bio :bio,
    firstname:fname,
    lastname:lname,
    branchname:branchname,
    address:address,
    emailId:emailId,
    phoneno:phoneno,
    birthday:birthday,
    birthmonth:birthmonth,
    birthyear:birthyear,
    // clubs:[],
    // post:[]
  });
  user.save();
  // users.insertOne(
    // user()
  // );

  res.redirect("/profile");

});
app.get("/",function(req,res){
  res.render("fill",{});
});

// app.post("/post",function(req,res){
//   const pc = req.body.postContent;
//   user.post.push(pc)
// })

app.get("/profile",function(req,res){
  User.find({},function(err,User1){
    console.log(User1);
    const abz = User1.pop();
  // var birth = user.birthday +user.birthmonth +user.birthyear
  res.render("profile",{user:abz

    // clubs:user.clubs,
    // post:user.post
  });
});
});
app.listen(3000,function(){
  console.log("server running");
});
