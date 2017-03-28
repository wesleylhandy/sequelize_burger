const connection = require("./connection.js");


function selectAll() {
	return new Promise((resolve, reject)=>{

		connection.query("SELECT * FROM burgers", (err, data)=> {
			if (err) {
				reject(err);
			} else {
				console.log(data)
				resolve(data);
			}
		});
	});
}

function insertOne(name) {
	return new Promise((resolve, reject)=> {
		connection.query("INSERT INTO burgers SET ?", {burger_name: name}, (err,data) => {
			if (err) {
				reject(err);
			} else {
				console.log('added');
				resolve(data);
			}
		});
	});
}

function updateOne(id) {
	return new Promise((resolve, reject)=> {
		connection.query("UPDATE burgers SET ? WHERE ? LIMIT 1", [{devoured: true}, {id: id}], (err, data) => {
			if (err) {
				reject(err);
			} else {
				resolve(data);
			}
		});
	});
}

exports.selectAll = selectAll;
exports.insertOne = insertOne;
exports.updateOne = updateOne;