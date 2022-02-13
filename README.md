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

### IBM i Server
- #### Creating PUB400 Profile
    PUB400 provide free IBM i server profile. 
    Please visit - pub400.com
    
        

---

## Install

    $ git clone https://shivam_pio@bitbucket.org/shivam_pio/inventory-status.git
    $ cd inventory-status
    $ npm install


## Running the project in development mode
- To start frontend:

        $ npm start

- You also need to run the backend JAVA project if not deployed anywhere. To run backend server follow the documentation of the backend project()

- Configure the backend URL as per need in `proxy.conf.json` file.

## Build the project for production

    $ ng build --prod

## Documentation of the application

    $ npm run compdoc
