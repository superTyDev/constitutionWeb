// Tyson McLaws
// 6/11/22
// Server Side Code for NODE JS Express server

const express = require("express");
const sprightly = require("sprightly");
const compression = require("compression");

const app = express();
var port = process.env.PORT || 8081;

if (process.env.FLASK_ENV != "development") {
	app.enable("trust proxy");
	app.use((req, res, next) => {
		req.secure ? next() : res.redirect("https://" + req.headers.host + req.url);
	});
}

app.set("views", "./views"); // specify the views directory (its ./views by default)
app.set("view engine", "ejs"); // register the template engine
app.use(express.static("public"));

// Compression
const shouldCompress = (req, res) => {
	if (req.headers["x-no-compression"]) {
		return false;
	}
	return compression.filter(req, res);
};
app.use(
	compression({
		filter: shouldCompress,
		threshold: 0,
	})
);

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
