const express = require('express');
const app = express();

const bodyParser = require('body-parser')

app.use(bodyParser.json());

app.get('/',(req, res) => {
    console.log("Was detected req on GET '/'", req.query)
    res.json({
        data: 'Hello world +++'
    });
})

app.post('/',(req, res) => {
    console.log("Was detected req on POST '/'", req.body.a)
    res.json({
        data: 'Hello world POST'
    });
})

app.listen(3000, () => {
    console.log("Server was start on port 3000")
})