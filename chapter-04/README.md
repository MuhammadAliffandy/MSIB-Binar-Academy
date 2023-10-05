## This is a challenge for chapter 4 to create API with Postgres 
My API create with Javascript Languange and use a more dependency like a ORM to handle SQL Query from Postgres and you can test my Api in local host and create your db in dbms pgAdmin. And its have a front end to test Api and make a good experience user.

## Build With
- [JavaScript](https://www.javascript.com/) - is a scripting language that enables you to create dynamically updating content, control multimedia, animate      images, and pretty much everything else.
- [Node JS](https://nodejs.org/en) - Node.js® is an open-source, cross-platform JavaScript runtime environment.
- [Express JS](https://expressjs.com/) - Fast, unopinionated, minimalist web framework for Node.js.
- [uuid](https://www.npmjs.com/package/uuid) - Creating UUID code with useful package in Node js.
- [Sequelize](https://sequelize.org) - Sequelize is a modern TypeScript and Node.js ORM for Oracle, Postgres, MySQL, MariaDB, SQLite and SQL Server, and more.
- [Multer](https://www.npmjs.com/package/multer) - Multer is a node.js middleware for handling multipart/form-data, which is primarily used for uploading files. It is written on top of busboy for maximum efficiency


## FYI 

- Okay First i use JS languange to create the algorithm and write many code with this.
- Used Node js to make a enviroment and integrated if use many dependecy to make complex apps or program.
- Express JS this a web framework and this is so helpful to create web service and server - client. and i make it in my API and to implementation middleware , routing and handle method from client request .
- uuid is package to create or to build the code random for data id.
- Data in my api used Postgres and DBMS PgAdmin in local. To integrate server and database , i use ORM to make useful algorihtm from code program and make to easy.
- In my dependecy i use Multer, multer is some library to fetch request file type like a images. And my api make form data if you use with software testing api.

## Getting Started

if you need to start api from your local and you want to change more algorithm from this, u can cloning first:

```sh
$ git clone https://github.com/MuhammadAliffandy/MSIB-Binar-Academy.git
$ cd chapter-04
```

## Usage

before you run this you must installation package to make the program its not error for u.

```sh
$ npm install
```

run the server with Node JS runtime and i am used Node JS v 18+

```sh
$ npm run start
```
NB : if you need test with form web to good experience you can run then index html from 
```javascript
./public/index.html
```
you can run this with live server extension from your IDE and run together with the server api to get data and sync the method.

Many API endpoints return the JSON representation of the resources created or edited. and following : 
```javascript
{
  "message" : string,
  "data"    : string
}
```
The `message` attribute contains a message commonly used to indicate errors or, in the case of deleting a resource, success that the resource was properly deleted.

The `data` attribute contains any other metadata associated with the response. This will be an escaped string containing JSON data.

## Data Structure ( to Create new Data )

if u need testing api with app test you can send req with form data and upload image with file type. Then data with JSON string

```javascript

{
  image : BLOB ,
}

{
  name : string;
  rentPerDay: number;
  size: string;
  createdAt: Date;
  updatedAt: Date;
}
```

## Method and EndPoint

The method from API following :

| Endpoint | Method | 
| :--- | :--- |
| .../| GET |
| .../cars/ | GET |
| .../cars/:id | GET |
| .../cars | POST |
| .../cars/:id | PUT |
| .../cars/:id | DELETE |

## Status Codes

API is returns the following status codes:

| Status Code | Description |
| :--- | :--- |
| 200 | `OK` |
| 201 | `CREATED` |
| 404 | `NOT FOUND` |
| 500 | `INTERNAL SERVER ERROR` |

