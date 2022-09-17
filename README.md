# Project Atelier
​
Welcome to Atelier, created by BasilSeeds!
​
​
BasilSeeds have created a web application that will replace your outdated web portal with a modern design which grabs the shopper's attention.
Atelier is built completely from the ground up with user-friendliness and speed as our main focus.
Your shopper can easily browse through stock images of the products, are shown related items that may also interest them and build their own outfit!
Both of these features display up-to-date prices whether the item is on sale so they can promptly take advantage and make the purchase.
Your shoppers can also join your online community through our Q&A and Reviews components. Shoppers can ask questions about your products that can then be answered by a company representative or prior buyers. Both features will allow them to submit a review/answer about the product and include up to five photos.

Please submit any feedback or questions to feedback@basilseeds.com
Have a great day!  - BasilSeeds
​
## Installation
​
Install Atelier with npm
​
```bash
  git clone https://github.com/rpp2204-fec-basilseed/Atelier.git
  npm install (may need to include --legacy-peer-deps if prompted)
  cd Atelier
```

## Run Locally
​
​
Go to the project directory
​
```bash
  cd Atelier
```
​
Create environmental variables
​
```bash
  touch .env
  API_KEY={"string"} (This token comes from github and will be used for authentication to connect)
  PORT={integer}  (Integer will be the port you wish to use)
  REACT_API_KEY={"string"} (Same token as API_KEY)
```
​
Copy HTML and CSS files to required directory
​
```bash
  cp index.html ./dist
  cp app.css ./dist
```
​
Build application with Webpack
​
```bash
  npm run build
```
​
Start the server
​
```bash
  npm start
```
​
Navigate to homepage
​
```bash
  localhost:PORT (Port will be the entered integer used in created .env file)
```
## Screenshots
​
![App Screenshot](https://res.cloudinary.com/dob8np3df/image/upload/v1663378077/bc9vjkvxeppuxvhybhgw.png)
![App Screenshot](https://res.cloudinary.com/dob8np3df/image/upload/v1663378079/csfl3xuw1kjjnwomtlkr.png)
![App Screenshot](https://res.cloudinary.com/dob8np3df/image/upload/v1663378069/feiifeomnmpvntu9bg4m.png)
![App Screenshot](https://res.cloudinary.com/dob8np3df/image/upload/v1663378074/bfjnptwuunzy6cam8nh6.png)