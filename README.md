# Node IBMi

## Node IBMi - Demo developed by Shivam Lohiya.
This is an demo application in which we connect `NodeJS` with `IBM i` using `itoolkit` package and create APIs aswell we can call RPG and CL program. Also, I created one API by which i call work active Job. 

I added `KeyCloak` as OAuth server for tokenized API. 

Also, I integrate `Sawgger Stats` and `Swagger UI` for better uderstanding,

---
## Dependencies

- NodeJS
- IBM i
- Itoolkit
- Express
- KeyCloak
- Swagger Stats
- Swagger UI


---
## Endpoints of API

- Get All - http://localhost:3000/users
- Get by Id - http://localhost:3000/users/10021
- Insert(Post) Data - http://localhost:3000/users/10021
- Delete Data - http://localhost:3000/users/1001
- Update(Put) Data - http://localhost:3000/users/121
- Get Work Active Job - http://localhost:3000/wrkactjob
- KeyCloak(Authorization) Token - http://localhost:8080/auth/realms/IBMi-Demo/protocol/openid-connect/token

   Explore the [API Document](https://github.com/Shivampio/Node-IBM-i/blob/main/Node%20-%20IBM%20i.postman_collection.json) for better overview.
---
## Requirements

For development, you will need Node.js, IBM i Server and KeyCloak Server

### Node
- #### Node installation on Windows

  Just go on [official Node.js website](https://nodejs.org/) and download the installer.
Also, be sure to have `git` available in your PATH, `npm` might need it (You can find git [here](https://git-scm.com/)).

- #### Node installation on Linux

  You can install nodejs and npm easily with apt install, just run the following commands.

      $ sudo apt install nodejs
      $ sudo apt install npm

- #### Other Operating Systems
  You can find more information about the installation on the [official Node.js website](https://nodejs.org/) and the [official NPM website](https://npmjs.org/).

If the installation was successful, you should be able to run the following command.

    $ node --version
    v16.13.1

    $ npm --version
    8.1.2

If you need to update `npm`, you can make it using `npm`! Cool right? After running the following command, just open again the command line and be happy.

    $ npm install npm -g

---

### IBM i Server
- #### Creating PUB400 Profile
    - [PUB400](pub400.com) provide free IBM i server profile. 
    - Create your own profile follow the steps in the link - https://www.geek4tutorial.com/2020/02/how-to-get-free-as400-profile-and.html

    For this demo, I used my test server.   

    You can update your credentials into the `connection.js` file. 

---

### KeyCloak Server

   - Keycloak is an open source Identity and Access Management solution targeted towards modern applications and services. Keycloak offers features such as Single-Sign-On (SSO), Identity Brokering and Social Login, User Federation, Client Adapters, an Admin Console, and an Account Management Console.

   - We used KeyCloak for this demo to create tokenized API.

   - Download [KeyCloak](https://www.keycloak.org/downloads)

   - Follow the below links to setup KeyCloak in your system: -
     - https://medium.com/devops-dudes/keycloak-for-identity-and-access-management-9860a994bf0
     - https://medium.com/devops-dudes/securing-node-js-express-rest-apis-with-keycloak-a4946083be51
     - https://medium.com/theoptimaltechnologist/what-is-keycloak-how-to-use-it-an-example-with-nodejs-part-2-46b562e2b46c

---

## Running the project in development mode
- To start backend:

        $ node index.js

- Start the KeyCloak Server by running Standalone.sh for Windows(C:\path\keycloak-16.1.1\bin)

---

## Swagger Stats
- You can check API statics using [Swagger Stats](http://localhost:3000/swagger-stats)

![image](https://user-images.githubusercontent.com/60472008/153750616-7aef1ce6-f8a1-476f-ad24-e62ad21bb6c1.png)
