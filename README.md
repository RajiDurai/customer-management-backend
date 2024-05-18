# customer-management-app
To display a customer list based on filters set to customer's firstName, lastName and companyName

# Steps from the scratch:
1. Create a repository in GHE
2. Clone repository
  ```
git clone <repository_url>
```
3. I like to start with backend so creating a backend project using Node.js. Front project using react.js will be added later.
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
     - create routes for data retrieval, handle search and filter requests
     - Implement database queries to fetch customers based on search string on names and company.
6. Front end implementation
     - set up UI componenets - search text field for names, drop down for company name and list for data retrieval
     -  Make requests to teh back end with passing search string
     - List display of results in UI
7. Testing
     - Write tests for backend routes, front end components
 


