const express = require('express');
const app = express();
const bp = require('body-parser')
const routes = require("./routes/route")

app.use(bp.json());
app.use(bp.urlencoded({extended:true}))
app.use('/',routes);

app.get('/', (req, res) => {
    res.status(200).json({ message: "Ping successfully" });
});

app.listen(5000, () => {
    console.log('listening on http://localhost:5000');
});

module.exports = app;