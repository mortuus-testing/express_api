const express  = require('express');
const path = require('path')
const app = express();
const port = 3000;

app.use(express.urlencoded({extended: false}));
// Static needed for fetching static object like image
app.use(express.static('public'))

// Default route
app.get("/", (req, res) => {
	res.sendFile('index.html', {root: path.join(__dirname, 'public')});
});

// API Route
app.get("/api", (req, res) => {
	try {
		res.json({
			status: 200,
			messege: "Success!"
	})
	}
	catch(error) {
		console.log(error)
		res.status(500).send("Server error!")
	}
});
app.get("/api/users", (req, res) => {
	res.json([
		{ id: 1, name: "Takahashi", password: "takahashi"},
		{ id: 2, name: "Haruka", password: "haruka"},
		{ id: 3, name: "Tomoe", password: "tomoe"}
	])
});

app.listen(port, () => {
	console.log("Server is running on port " + port)
});


// Export the Express API
// Required for deployment to vercel
module.exports = app;
