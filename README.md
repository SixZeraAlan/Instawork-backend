# Instawork-backend

## Project Introduction

The goal of the project is to implement an HTTP API to support a team-member management application. The team member data should be persisted in a MySQL database. The application needs to support listing team members, adding a new team member, editing a team member, and deleting a team member.

### Listing team members
This endpoint should return a JSON array of all team members in the application. For each team member, the following data should be included:

```
a unique id
first name
last name
phone number
email
role (this is either "admin" or "regular")
```

### Adding a team member

```
This endpoint should accept a JSON object in the body of the request. The JSON object should include the same properties as above (first/last name, phone, email, role) except for the unique id. The API response should return a JSON object with the properties, including a unique id for the team member.
```

### Editing a team member

```
This endpoint should accept a JSON object in the body of the request. The JSON object can include any of the properties above (first/last name, phone, email, role). The API response should return all of the (updated) properties of the team member.


Note: Not all properties need to be provided in the request. Properties that are not included should not be updated.
```
### Deleting a team member

```
This endpoint should take a unique id for the team member and return an empty response.
```


## Prerequisites

This project requires NodeJS (version 16 or later) and NPM.
[Node](http://nodejs.org/) and [NPM](https://npmjs.org/) are really easy to install. You also need the MySQL database installed on your local machine.
To make sure you have them available on your machine,
try running the following command.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

###  Schema used for MySQL database

[{
  - `'id'`: int, PK, NN, 
  - `'firstName'`: varchar(255), 
  - `'lastName'`: varchar(255), 
  - `'phone'`: varchar(255), 
  - `'email'`: varchar(255), 
  - `'role'`: ENUM('admin','regular')
}]

- Create a new databse named 'my_db' on your local MySQL database
- Then, use the following db script to create a table 'users'
```
'CREATE TABLE IF NOT EXISTS users (
    id int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
    firstName varchar(255),
    lastName varchar(255),
    phone varchar(255),
    email varchar(255),
    role ENUM('admin', 'regular'));'
```
- Specify your own database info inside the file './app/models/db.js'
e.g.,
```
	host: "localhost",
	user: "root",
	password: 'password',
```
###  How to set up and run

- Clone the repository
```
git clone git@github.com:SixZeraAlan/Instawork-backend.git
```

- Install dependencies
```
cd Instawork-backend
npm install
```

- Build and run the project
```
npm start
```

### How to test the project

|HTTP Method|URL|Description|
|---|---|---|
|`POST`|curl -X POST -H "Content-Type:application/json" http://localhost:9000/users -d '{"firstName": "David", "lastName": "Jones", "phone": "+15101234567", "email": "test@test.com", "role": "admin"}' | Create new User |
|`GET`|curl -X GET -H "Content-Type:application/json" http://localhost:9000/users | Get All Users |
|`GET`|curl -X GET -H "Content-Type:application/json" http://localhost:9000/users/:id | Get a User by id |
|`PUT`|curl -X PUT -H "Content-Type:application/json" http://localhost:9000/users/1 -d '{ "firstName": "Tom"}' | Update an existing User by ID |
|`DELETE`|curl -X DELETE -H "Content-Type:application/json" http://localhost:9000/users/:id | Delete User by ID |
|`DELETE`|curl -X DELETE -H "Content-Type:application/json" http://localhost:9000/users/ | Delete All Users |


