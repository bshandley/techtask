const express = require('express');
const app = express();
const path = require("path");

// Clean up the URL
app.get(['/', '/55jsyeks'], (req, res) => {
	const url = req.originalUrl;
    const path = url.substr(1, url.length);
	res.redirect(301, path + '/index.htm');
});

app.get('*/index.htm', (req, res) => res.sendFile(path.join(__dirname, '/index.htm')));

app.listen(3000);
