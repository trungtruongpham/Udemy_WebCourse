const express = require("express");
const bodyParse = require("body-parser");

const app = express();

app.use(bodyParse.urlencoded({extended: true}));

app.get("/", function(req,res){
    res.sendFile(__dirname + "/index.html");
})

app.post("/", function(req,res){
    var num1 = Number.parseInt(req.body.num1);
    var num2 = Number.parseInt(req.body.num2);

    var result = num1 + num2;

    res.send("The result of the calculator is : " + result);
})

app.get("/bmicalculator", function(req,res){
    res.sendFile(__dirname + "/bmiCalculator.html");
})

app.post("/bmicalculator", function(req, res){
    var weight = Number.parseFloat(req.body.weight);
    var height = Number.parseFloat(req.body.height);

    var bmi = weight / (height * height);
    res.send("Your BMI is " + bmi);
})

app.listen(3000, function(){
    console.log("Server started!");
    console.log("hi");
})

