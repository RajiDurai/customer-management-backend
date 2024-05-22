## About the project
### customer-management-backend 
To display a customer list based on search set to customer's First Name or Last Name and filters set to Company Name. I have used MERN tech stack creating the backend end in node, express and mongoose. The dependencies installed and work tasks are tracked in GITHUB issues url - [https://github.com/RajiDurai/customer-management-backend/issues](https://github.com/RajiDurai/customer-management-backend/issues).
I started this project by implementing the back end first and tested the api using POSTMAN inputting the endpoints and fetched test data from local mongo db set up.
### Breakdown of how I started the project:
1. Create a repository in GHE
2. Clone repository
  ```
git clone <repository_url>
```
3. I like to start with backend so creating a backend project using Node.js. Front project using react.js is added later.
```
cd backend
npm init -y
 ```
4. Commit and push
```
git add .
git commit -m "Initial commit"
git push origin main
```
5. Backend implemenation(API endpoints)
     - create routes for data retrieval, handle search and filter requests.
     - Implement database queries to fetch customers based on search string on names and company. Note: I have handled filtering and search in the backend query itself.
6. Front end implementation
     - set up UI componenets - search text field for names, drop down for company name and list for data retrieval
     -  Make requests to teh back end with passing search string
     - List display of results in UI
7. Testing
     - Write tests for backend routes, front end components

  ## The implementation:
  
  ### 1. Setting Up the Project:
   * Make sure you have Node.js and npm installed.(https://medium.com/@hayasnc/how-to-install-nodejs-and-npm-on-mac-using-homebrew-b33780287d8f)
   *  Create a new Node project:
    ```
    cd customer-management-backend
    npm init -y
     ```

  * Install any necessary dependencies (e.g., express for server coding, cors - cross origin request and mongoose - Object database modelling):
    ``` npm i express cors mongoose nodemon dotenv ```
  ### 2. Create routes(API endpoints implentation):
  * Create a /routes folder and create customer.js for implementing customer search and filter
  * Harcode imput values in json and test the end points using postman
  ### 3. Create database (database implemenation and add mock data):
  * Install mongo db before proceeding to next step(source: https://www.sqliz.com/posts/install-mongodb-on-macos/)
  * To start mongo service, use ``` brew services start mongodb/brew/mongodb-community ```
  *  To access mongo shell, use ``` mongosh. ``` (Note. command 'mongo' doesn't work after version 6)
  * Create a /models folder and create customer.js for creating customer schema.

  ### 4. Test the backend
  Database schema:
 ```
  [
    { id: 1, firstName: 'Raji', lastName: 'Durai', company: 'NewRelic' },
    { id: 2, firstName: 'Rachel', lastName: 'Smith', company: 'Google' },
    { id: 2, firstName: 'Dhara', lastName: 'Thamil', company: 'Google' }
  ];
```
* Search functionality:
  - Input : GET request to endpoints - http://localhost:5000/api/customers?search=Raji. This request is currently hardcoded in url (to be implemented in front end)
  - Output : returns json data of customers list with matching first name or last name.
  - Edge cases : non-English characters

* Filter functionality:
  - Input : GET request to endpoints - http://localhost:5000/api/customers?filter_by_company_name=Google. This request is currently hardcoded in url (to be implemented in front end)
  - Output : returns json data of customers list with matching company name.
  - Edge cases : non-English characters
 
### Here are the steps involved to run the project locally:
#### Clone the project from the git URL - 

In the project directory, you can run:

#### `npm start`

Runs the app in the development mode.\
Open [http://localhost:5000](http://localhost:5000) to view it in your browser or use POSTMAN.


#### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

Your app is ready to be deployed!

### Future goals
* write tests covering all possible end points and different inputs mismatching reg ex and non-english characters unit tests.
* write routing for pagination and sort
* Install newrelic monitoring to know about the performance
* Seed the database from /faker and test robustically

