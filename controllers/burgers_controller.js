const methodOverride = require("method-override");
const connection = require("../config/orm.js");
const express = require("express")

module.exports = function(app) {

	//call new router object
	const router = express.Router();
	
	router.use(methodOverride("_method"));

	router.get("/", (req, res)=> {
		res.redirect("/index");
	});
 
 	router.get("/index", (req,res)=>{
 		connection.selectAll().then((burgers)=>{
 			res.render("index", {burgers:burgers});
 		}).catch((err)=>{
 			res.sendStatus(503).json(err);
 		});
 		
 	});

 	router.post("/new", (req,res)=>{
 		connection.insertOne(req.body.burger_name).then((success)=>{
 			res.redirect("/index");
 		}).catch((err)=>{
 			res.sendStatus(503).json(err);
 		});
 	});

 	router.put("/update", (req, res)=>{
 		connection.updateOne(req.body.id).then((success)=>{
 			res.redirect("/index");
 		}).catch((err)=>{
 			res.sendStatus(503).json(err);
 		});
 	});

 	app.use("/", router);

}