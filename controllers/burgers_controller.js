const methodOverride = require("method-override");
const data = require("../config/data.js");
const express = require("express")

module.exports = function(app) {

	//call new router object
	const router = express.Router();
	
	router.use(methodOverride("_method"));

	router.get("/", (req, res)=> {
		res.redirect("/index");
	});
 
 	router.get("/index", (req,res)=>{
 		data.selectAll().then((burgers)=>{
 			console.log('about to render', burgers)
 			res.render("index", {burgers:burgers});
 		}).catch((err)=>{
 			res.json(err);
 		});
 		
 	});

 	router.post("/new", (req,res)=>{
 		data.insertBurger(req.body.burger_name).then((success)=>{
 			res.redirect("/index");
 		}).catch((err)=>{
 			res.json(err);
 		});
 	});

 	router.put("/devour", (req, res)=>{
 		data.devourBurger(req.body.id).then((success)=>{
 			res.redirect("/index");
 		}).catch((err)=>{
 			res.json(err);
 		});
 	});

 	router.post("/customer", (req, res)=>{
 		data.updateBurgersCustomer(req.body.customerName, req.body.burgerId).then((success)=>{
 			res.redirect("/index");
 		}).catch((err)=>{
 			res.json(err);
 		});
 	});

 	app.use("/", router);

}