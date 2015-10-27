var express = require("express");
var app     = express();

app.set("view engine", "ejs");

app.get("/", function(req, res) {
    res.send("hallo welt");
    console.log("Die Startseite wurde aufgerufen.");
});

app.get("/sign-in/", function(req, res) {
    res.send("Bitte einlogen");
});

app.get("/user/:id", function(req, res) {
    res.send("User:" + req.params.id);
});

var server = app.listen(3000, function() {
    console.log("Der Server läuft.");
});