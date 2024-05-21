const router = require("express").Router();
const Customer = require("../models/Customer");
const customers = require("../config/customers.json");


/* router.get('/customers', async (req, res) => {
    try {
        const allUsers = await Customer.find(); // Retrieve all users
        res.json(allUsers);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }

}); */

router.get("/customers", async (req, res) => {
    try {
        const page = parseInt(req.query.page) - 1 || 0;
        const limit = parseInt(req.query.limit) || 5;
        const search = req.query.search || "";
        let filter_by_company_name = req.query.filter_by_company_name ||"All";
        console.log('search' + search + "hi");
        let sort = req.query.sort || "rating";
        let companyName = req.query.genre || "All";
        const searchQuery = {
            $or: [
                { firstName: { $regex: search, $options: 'i' } },
                { lastName: { $regex: search, $options: 'i' } }
            ]
        };
        console.log('searchQuery' + searchQuery);
        const companyNames = [];

        companyName === "All"
            ? (companyName = [...companyNames])
            : (companyName = req.query.companyName.split(","));
        req.query.sort ? (sort = req.query.sort.split(",")) : (sort = [sort]);

        let sortBy = {};
        if (sort[1]) {
            sortBy[sort[0]] = sort[1];
        } else {
            sortBy[sort[0]] = "asc";
        }

        const customers = await Customer.find(searchQuery);
        console.log(JSON.stringify(customers));
/*                  .where("companyName")
                    .in([...companyName])
                    .sort(sortBy)
                    .skip(page * limit)
                    .limit(limit); */

        const total = await Customer.countDocuments({
            companyName: { $in: [...companyName] },
            name: { $regex: search, $options: "i" },
        });

        const response = {
            error: false,
            total,
            page: page + 1,
            limit,
            companies: companyNames,
            customers,
        };

        res.status(200).json(response);
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: true, message: "Internal Server Error" });
    }
});



module.exports = router;