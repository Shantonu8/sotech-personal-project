const express = require("express"),
	  app     = express()


app.set("view engine", "ejs")
app.use(express.static("public"));


app.get("/", function(req, res){
	res.render("landing")
})

app.get("/tech", function(req, res){
	res.render("tech")
})


app.listen(3000, function(){
	console.log("Serving on Port 3000")
})