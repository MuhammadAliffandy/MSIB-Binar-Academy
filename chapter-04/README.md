## This is a challenge for chapter 3 to create API with JSON responses
My API create with Javascript Languange and use a more dependency to make a complex algorithm. Ohh yes my API not only use JS but with Node JS for make a integrated data in local files . This data not use database but it is just JSON files in local.

## Build With
- [JavaScript](https://www.javascript.com/) - is a scripting language that enables you to create dynamically updating content, control multimedia, animate      images, and pretty much everything else.
- [Node JS](https://nodejs.org/en) - Node.js® is an open-source, cross-platform JavaScript runtime environment.
- [Express JS](https://expressjs.com/) - Fast, unopinionated, minimalist web framework for Node.js.
- [uuid](https://www.npmjs.com/package/uuid) - Creating UUID code with useful package in Node js.
- [fs](https://www.w3schools.com/nodejs/nodejs_filesystem.asp) - The Node.js file system module allows you to work with the file system on your computer.
- [JSON](https://www.json.org/json-en.html) - JSON (JavaScript Object Notation) is a lightweight data-interchange format. It is easy for humans to read and write.

## FYI 

- Okay First i use JS languange to create the algorithm and write many code with this.
- Used Node js to make a enviroment and integrated if use many dependecy to make complex apps or program.
- Express JS this a web framework and this is so helpful to create web service and server - client. and i make it in my API and to implementation middleware , routing and handle method from client request .
- fs and JSON , because the data from challenge use JSON file or object data in array. And yeah this is a reason i use fs module to write and read .json in local file.
- uuid is package to create or to build the code random for data id.

## Getting Started

if you need to start api from your local and you want to change more algorithm from this u can cloning first:

```sh
$ git clone https://github.com/MuhammadAliffandy/MSIB-Binar-Academy.git
$ cd chapter-03
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

```javascript
{
  image: string;
  capacity: number;
  rentPerDay: number;
  description: string;
  availableAt: string;
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

