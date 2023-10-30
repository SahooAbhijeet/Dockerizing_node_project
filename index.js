const express = require("express");

const app = express();

app.get('/home', (req, res) => {
    res.json({message: "OK"});
});
const PORT = 7000;

app.listen(PORT, () => {
    console.log(`Started the server on ${PORT}`);
});