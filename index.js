let express=require("express");
let bodyparser=require("body-parser");

let server=express();
 server.use(bodyparser.json());
 server.use(bodyparser.urlencoded({extend:true}))
let path=require("path");
server.set("view engine","pug");
server.set("views","../login-form");
server.get("/reno",(req,res)=>{
    res.render("new",{
        name:"hari",
        city:"delhi",
        religion:["katalla"]
    })
})
server.get("/login",(req,res)=>{
    res.render("/form");
})
server.post("/myform",(req,res)=>{
   res.send(req.body)
   console.log(req.body)

})
server.get("*",(req,res)=>{
    res.send("<h2>URL Not Found</h2>")
})
server.listen(5000);






