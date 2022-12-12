const express = require('express');
const path = require('path');
const app = express();
const PORT = 8080;
const HOST = '0.0.0.0';

app.use(express.static('angular-test'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/angular-test/index.html');
})

app.listen(PORT, HOST, () => {
    console.log(`Running on http://${HOST}:${PORT}`);
});