const express = require("express");


const app = express();
const portNumber = 3000;



app.use(express.static("public"));
app.set('view engine', 'ejs');

app.get("/home",(req,res)=>{

res.render("homePage");

});


app.get("/contact",(req,res)=>{

    res.render("contact");
    
    });
    
    



app.listen(portNumber,()=>{

  console.log("You are on port",portNumber);

});


