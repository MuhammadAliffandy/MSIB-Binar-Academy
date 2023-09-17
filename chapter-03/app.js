const express = require('express');
const app = express();
const routes = require("./src/routes/route")

app.use(express.json());
app.use('/',routes);

app.get('/', (req, res) => {
    res.status(200).json({ message: "Ping successfully" });
});

app.listen(5000, () => {
    console.log('listening on http://localhost:5000');
});

module.exports = app;