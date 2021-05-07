const express = require('express');
const app = express();
const path = require("path");

app.get(['/'], (req, res) => res.redirect(301, '/index.htm'));


app.get('*/index.htm', (req, res) => res.sendFile(path.join(__dirname, '/index.htm')));

app.listen(3000);
