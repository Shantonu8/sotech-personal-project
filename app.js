const express = require("express"),
	  app     = express()

// SERVER STUFF
app.set("view engine", "ejs")
app.use(express.static("public"));

//GENERAL ROUTES
app.get("/", function(req, res){
	res.render("landing")
	console.log("SOMEONE VISITED THE WEBSITE")
})

app.get("/tech", function(req, res){
	res.render("tech")
})

app.get("/media", function(req, res){
	res.render("media")
})

app.get("/about-me", function(req, res){
	res.render("about")
})
app.get("/test", function(req, res){
	res.render("test")	
})

//TECH ROUTES
app.get("/tech/cloud-computing", function(req, res){
	res.render("cloud")
})
app.get("/tech/blockchain", function(req, res){
	res.render("block")
})
app.get("/tech/vr", function(req, res){
	res.render("vr")
})


// SOCIAL MEDIA ROUTES
app.get("/media/twitter", function(req, res){
	res.render("twitter");
})

app.get("/media/facebook", function(req, res){
	res.render("facebook");
})

app.get("/media/instagram", function(req, res){
	res.render("instagram");
})








// SERVER STUFF

var port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log("Server Has Started!");
});

