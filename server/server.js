const express = require('express');
const app = express();

app.get('/', (req, res) => res.send('we are connected!'));
app.get('*'), (req, res) => res.status(404).send('error!');

app.listen(3000, () => console.log('listening at port 3000...'));