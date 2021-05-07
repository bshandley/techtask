const express = require('express');
const app = express();

app.get('/55jsyeks', (req, res) => res.send('Token auth!'));
app.get('/', (req, res) => res.send('Password auth!'));
app.listen(3000, () => console.log('Server ready'));
