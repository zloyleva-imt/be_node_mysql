const express = require('express');
const app = express();

const Sequelize = require('sequelize');

// Option 1: Passing parameters separately
const sequelize = new Sequelize('temp', 'root', '123456789', {
  host: 'localhost',
  dialect: 'mysql'
});

sequelize.authenticate()
    .then(() => console.log("was connected to db"))
    .catch(err => console.log("wasn't connected to db",err))


const bodyParser = require('body-parser')

app.use(bodyParser.json());

const usersController = require('./controllers/UsersController');

app.get('/users',usersController.users_index)

app.post('/users',(req, res) => {
    console.log("Was detected req on POST '/'", req.body.name)
    
    
    const result = User.create({
        name: req.body.name,
        password: req.body.password
    })

    res.json({
        data: result
    });
})

app.listen(3000, () => {
    console.log("Server was start on port 3000")
})