const Users = require('../models').Users;

exports.users_index = (req, res) => {
    console.log("Was detected req on GET '/'")

    Users.scope('withoutPassword').findAll()
        .then(result => {
            
            if(!result){
                res.send({
                    data: "No users"
                });
            }
            res.send({
                data: result
            });
        })
        .catch(err => res.send({
            data: err
        }));
}