const express = require("express");
const sprightly = require("sprightly");

const app = express();
var port = process.env.PORT || 8081;

app.set("views", "./views"); // specify the views directory (its ./views by default)
app.set("view engine", "ejs"); // register the template engine
// app.use(express.static("public", { extensions: ["html"] }));
app.use(express.static("public"));

app.get("/", (req, res) => {
	res.render("index", {
		title: "Home",
	});
});

app.get("/:page", (req, res) => {
	res.render(req.params.page, {
		title: req.params.page,
	});
});

app.listen(port, console.log("running"));
