var Login= require("../models/Login");
var Groceries= require("../models/Groceries");

module.exports = function(app){
    app.get("/api/login", function(req,res){//retrieves a unique user
        Login.findOne({
            where: {
                u_name: req.query.u_name,
                u_pass: req.query.u_pass
            }
        }).then(result =>{
            res.json(result);
        })
    });

    app.post("/api/register", function(req,res){//registers user
        Login.create({
            u_name: req.body.u_name,
            u_email: req.body.u_email,
            u_pass: req.body.u_pass
        }).then(() =>{
            console.log("Success");
            res.end();
        })
    });

    app.post("/api/add",function(req,res){// add item
        // console.log(req);
        Groceries.create({
            user_id: 3,
            food_name: req.query.food_name,
            experation_date: "12/31/19",
            expired: 0
        }).then(()=>{
            console.log("Success");
            res.end();
        })
    });


};