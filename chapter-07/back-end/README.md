## This is a challenge for chapter 7 , about testing and deployment backend project
Okay , My back end project is same like chapter 05 and i want to testing any program , after this i will deployment to usefull accessed from local to public used the REST API.

## Build With
- [JavaScript](https://www.javascript.com/) - is a scripting language that enables you to create dynamically updating content, control multimedia, animate      images, and pretty much everything else.
- [Node JS](https://nodejs.org/en) - Node.js® is an open-source, cross-platform JavaScript runtime environment.
- [Express JS](https://expressjs.com/) - Fast, unopinionated, minimalist web framework for Node.js.
- [ESLint](https://eslint.org) - ESLint statically analyzes your code to quickly find problems. It is built into most text editors and you can run ESLint as part of your continuous integration pipeline.
- [Jest](https://jestjs.io) - Jest is a JavaScript testing framework designed to ensure correctness of any JavaScript codebase
- [Supertest](https://www.npmjs.com/package/supertest) - The motivation with this module is to provide a high-level abstraction for testing HTTP, while still allowing you to drop down to the lower-level API provided by superagent.
- [Railway](https://railway.app) - Railway is an infrastructure platform where you can provision infrastructure, develop with that infrastructure locally, and then deploy to the cloud.

## FYI 
- For this project i not refactor many code but i only set configuration
- First i set the configuration for eslint to be good structure in my program
- And then i testing my controller to unit testing and api to be integration testing for this
- I get the coverage to see the presentace for good or not , i launch my testing
- Deployment? yes i deploy my project in railway
- I use dbms from railway to public db and deploy my back end to be create easy used my rest Api.

## Test Coverage

![image](https://github.com/MuhammadAliffandy/MSIB-Binar-Academy/assets/94156412/a3f76dd8-39e6-4025-909c-7709c0ca083d)



## Getting Started

if you need to start api from your local and you want to change more algorithm from this, u can cloning first:

```sh
$ git clone https://github.com/MuhammadAliffandy/MSIB-Binar-Academy.git
$ cd chapter-07/back-end
```

## Usage

before you run this you must installation package to make the program its not error for u.

```sh
$ npm install
```

After this dont to add .env form your local files to create configuration many secret key or db config.

```javascript
//.env

SECRET_KEY = 'YOUR_SECRET_KEY';
SESSION_KEY = 'YOUR_SESSION_SECRET_KEY'
GOOGLE_CLIENT_ID = 'YOUR_GOOGLE_CLIENT_ID'
GOOGLE_CLIENT_SECRET = 'YOUR_GOOGLE_CLIENT_SECRET'
FACEBOOK_CLIENT_ID = 'YOUR_GOOGLE_FACEBOOK_ID'
FACEBOOK_CLIENT_SECRET = 'YOUR_GOOGLE_FACEBOOK_SECRET'
DATABASE_URL="YOUR_DB_CONFIGURATION"

```

run the server with Node JS runtime and i am used Node JS v 18+

```sh
$ npm run start
```
To check the documentation of API you can access url form your web machine 

```javascript
http://localhost:5000/api-documentation
```
NB : To using the google and facebook auth you can using in web machine like this

To using the api you can add the superadmin account from seeders 
you can run the syntax CLI like this : 

```sh
npx sequelize-cli db:seed --seed 20231003164819-demo-user
```
Email and password Account : 

```javascript
{
  "email": "aliffandy@gmail.com",
  "password": "fandy12345"
}

```

## Demo
Here is a working live demo  
https://msib-binar-academy-production.up.railway.app/

this is Documentation Swagger Api
https://msib-binar-academy-production.up.railway.app/api-documentation/



