const mongoose = require("mongoose");

const dbCon = () => {
    const conParams = { useNewUrlParser: true , dbName : 'customerSchema'};// added here dbName after 5 hrs scratching my head
    mongoose.connect(process.env.DB, conParams);

    mongoose.connection.on("connected", () => {
		console.log("Hurray, Connected to database sucessfully");
	});

	mongoose.connection.on("error", (err) => {
		console.log("Oops eeror while connecting to database :" + err);
	});

	mongoose.connection.on("disconnected", () => {
		console.log("Mongodb disconnected");
	});
};

module.exports = dbCon;