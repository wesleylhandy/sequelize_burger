const db = require("../models");


function selectAll() {

	return new Promise((resolve, reject)=>{

		//associations
		db.Customers.hasMany(db.Burgers);
		db.Burgers.belongsTo(db.Customers);

		// include: [{
	 //        model: db.Customers,
	 //    }]

		db.Burgers.findAll({

			include: [{
				        model: db.Customers,
				    }]
			
		}).then((burgers)=>{

	    	resolve(burgers);

		}).catch((err)=>{if(err) reject(err)});
	});
}

function insertBurger(burgerName) {

	return new Promise((resolve, reject)=> {
		
		db.Burgers.create({
	      	burger_name: burgerName,
	      	devoured: false,
	      	customerId: null
	    }).then((success)=>{

	    	console.log("add burger", success);
	    	resolve(success);

	    }).catch((err)=>{if(err) reject(err)});
	});
}

function devourBurger(burgerId) {

	return new Promise((resolve, reject)=> {

		db.Burgers.update({
            devoured: true
        },{
        	where: {
        		id: burgerId
        	}
        }).then((success)=>{

        	console.log('update burger', success);
        	resolve(success);

        }).catch((err)=>{if(err) reject(err)});
	});
}

function updateBurgersCustomer(customerName, burgerId) {

	return new Promise((resolve, reject)=> {

		db.Customers.create({

			customer_name: customerName

		}).then((customer)=>{
			console.log('customer created', customer)
			db.Burgers.update({
	            customerId: customer.id
	        },{
	        	where: {
	        		id: burgerId
	        	}
	        }).then((success)=>{

	        	console.log('update customer', success);
	        	resolve(success);
	        	
	        }).catch((err)=>{if(err) reject(err)});

	    }).catch((err)=>{if(err) reject(err)});

	});

}

module.exports = {

	selectAll,
	insertBurger,
	devourBurger,
	updateBurgersCustomer

}