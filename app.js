const express = require('express'); 
const customers = require('./customers'); 

// Initialize App 
const app = express(); 

// Assign route for search
app.use('/api/customers/search', (req, res, next) => { 
    const{name} = req.query;
    const filteredCustomers = customers.filter(
        (customer) =>
          customer.firstName.toLowerCase().includes(name.toLowerCase()) ||
          customer.lastName.toLowerCase().includes(name.toLowerCase())
      );
      res.json(filteredCustomers);

}); 
//Assign route for filter by company name
app.use('/api/customers/filter', (req, res) => {
    const { company } = req.query;
    const filteredCustomers = customers.filter(
      (customer) => customer.company.toLowerCase() === company.toLowerCase()
    );
    res.json(filteredCustomers);
  });

// Start server on PORT 5000 
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});