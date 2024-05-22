const router = require("express").Router();
const Customer = require("../models/Customer");//import models
const customers = require("../config/customers.json");// sample customer data testing purpose 


/* router.get('/customers', async (req, res) => {
    try {
        const allUsers = await Customer.find(); // Retrieve all users
        res.json(allUsers);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }

}); */

//search and filter_by_company_name route

router.get("/customers", async (req, res) => {
    try {
        const page = parseInt(req.query.page) - 1 || 0;
        const limit = parseInt(req.query.limit) || 5;
        const search = req.query.search || "";
        let filter_by_company_name = req.query.filter_by_company_name || "All";
        console.log('search' + search);// testing purpose
        console.log('filter_by_company_name' + filter_by_company_name);//testing purpose

        let sort = req.query.sort || "rating";
        let companyName = req.query.filter_by_company_name || "All";
        const searchQuery = {
            $or: [
                { firstName: { $regex: search, $options: 'i' } },
                { lastName: { $regex: search, $options: 'i' } }
            ]
        };
        console.log('searchQuery' + searchQuery);
        const companyNames = ["Google", "New Relic", "Snowflake", "Amazon"];// mock data for testing

        filter_by_company_name === "All"
            ? (filter_by_company_name = [...companyNames])
            : (filter_by_company_name = req.query.filter_by_company_name);
        req.query.sort ? (sort = req.query.sort.split(",")) : (sort = [sort]);
        console.log('filter_by_company_name' + filter_by_company_name);

       //sorting implemented but yet to tested
        let sortBy = {};
        if (sort[1]) {
            sortBy[sort[0]] = sort[1];
        } else {
            sortBy[sort[0]] = "asc";
        }
        //database find on first name or last name 
        const customers = await Customer.find(searchQuery)
            .where("companyName")
            .in([...companyName])
            .sort(sortBy)
            .skip(page * limit)
            .limit(limit);
        console.log(JSON.stringify(customers));
        //database filter on company name
        const companies = await Customer.find()
            .where("companyName")
            .in(filter_by_company_name);
        const total = await Customer.countDocuments({
            companyName: { $in: [...companyName] },
            name: { $regex: search, $options: "i" },
        });

       //get response
        const response = {
            error: false,
            total,
            page: page + 1,
            limit,
            companies: companies,
            customers,
        };

        res.status(200).json(response);
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: true, message: "Internal Server Error" });
    }
});



module.exports = router;