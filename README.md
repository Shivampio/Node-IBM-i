# Node IBMi

Node IBMi - Demo developed by [Shivam Lohiya].

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

