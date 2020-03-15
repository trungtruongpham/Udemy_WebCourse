const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");
const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/todonoteDB", {useNewUrlParser: true, useUnifiedTopology: true});

const noteSchema = new mongoose.Schema({
    note :{
        type: String,
        required: [true, "Please check your note!"]
    }
});

const app = express();

var Note = mongoose.model("Note", noteSchema);
var noteArr = [];

const test = new Note({
    note: "test",
});

noteArr.push(test);

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", function (req, res) {
    let day = date.getDay();

    res.render("list", { listTitle: day, newListItem: noteArr });
});

app.post("/", function (req, res) {
    const newnNote = new Note({
        note: req.body.newItem,
    });

    noteArr.push(newnNote);
    
    Note.insertMany(noteArr, function(err, docs){
        if(err){
            console.log(err);
        }
        else{
            console.log(noteArr);
            console.log("Successfully saved note");   
        }
    });

    res.redirect("/");
});


app.post("/delete", function(req,res){
    const checkedItemId = req.body.checkBox;

    Note.findByIdAndRemove(checkedItemId, function(err){
        if(err){
            console.log(err);
        }
        else{
            console.log("Successfully deleted note");   
            app.redirect("/");
        }
    })
});


app.listen(3000, function () {
    console.log("Server started on port 3000.");
});

