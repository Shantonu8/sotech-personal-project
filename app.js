const express = require("express"),
	  app     = express()


app.set("view engine", "ejs")
app.use(express.static("public"));

// ROUTES
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

app.listen(3000, function(){
	console.log("Serving on Port 3000")
})