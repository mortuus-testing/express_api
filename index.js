const express  = require('express');
const app = express();
const port = 3000;

app.use(express.urlencoded({extended: false}));

app.get("/", (req, res) => {
	res.send("Welcome to Express API")	
});
app.get("/users", (req, rs) => {
	res.json([
		{ id: 1, name: "Akahashi", password: "Pass"},
		{ id: 2, name: "Haruka", password: "Word"}
	])
});

app.listen(port, () => {
	console.log("Server is running on port " + port)
});
