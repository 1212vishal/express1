const express=require("express");
const app=express();
const port=8000;
app.get("/",(req,res)=>{
res.send("welcome to home page");
});
app.get("/about",(req,res)=>{
    res.send("<h1>welcome to about page</h1>");
});
app.listen(port,()=>{
  console.log(`listening to port no ${port}`);
});
