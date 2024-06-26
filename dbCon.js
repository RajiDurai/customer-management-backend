const mongoose = require("mongoose");
//set db connection 
const dbCon = () => {
    const conParams = { useNewUrlParser: true , dbName : 'customerSchema'};// added here dbName after 5 hrs scratching my head
    mongoose.connect(process.env.DB, conParams);

    mongoose.connection.on("connected", () => {
		console.log("Hiyaaa, Connected to database sucessfully");
	});

	mongoose.connection.on("error", (err) => {
		console.log("Oh no error while connecting to database :" + err);
	});

	mongoose.connection.on("disconnected", () => {
		console.log("Mongodb disconnected");
	});
};

module.exports = dbCon;