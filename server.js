var express=require('express');
var app=express();

app.get("/",(req, res)=>{
    res.send(
            "<h1>Fabrikam</h1>"
            +"<hr/>"
            +"<h3>Human Resource</h3>"
            + "<br/>"
            + "<ol>"
            +"<li>Mr. Patil</li>"
            +"<li>Miss. Deshmukh</li>"
            +"<li>Mr. Chavan</li>"
            +"<li>Miss. Kulkarni</li>"
            +"<li>Mr. Deshpande</li>"
            + "</ol>"
    );
});

app.get("/Accountings",(req, res)=>{
    res.send(
            "<h1>Accounting Information</h1>"
            +"<hr/>"
            +"<h3>Fabrikam's Accounting Information</h3>"
            + "<br/>"
            + "<ol>"
            +"<li>Department Head: Mr. Sonwane</li>"
            + "</ol>"
    );
});

app.get("/Project_Management",(req, res)=>{
    res.send(
            "<h1>Project Management  Information</h1>"
            +"<hr/>"
            +"<h3>Fabrikam's Project Management Information</h3>"
            + "<br/>"
            + "<ol>"
            +"<li>Department Head: Mr. Kale</li>"
            + "</ol>"
    );
});


var server=app.listen(9000);
console.log("Fabrikam intranet application running on port 9000");
