const express = require('express');
const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
const keycloak = require('./Config/keycloak-config.js').initKeycloak();
require("./Connection/connection").initConnection()
const databaseRouter = require('./Routers/database');
const workActiveJobRouter = require("./Routers/wrkactjob")
const swStats = require('swagger-stats');
const apiSpec = require('./swagger.json');

const app = express()
const port = 3000

const swaggerOptions = {
    swaggerDefinition: {
        info: {
            version: "1.0.0",
            title: "NodeJS IBM-i",
            description: "Find out how your APIs work",
            contact: {
                name: "Shivam Lohiya"
            },
            servers: ["http://localhost:3000"],
        }
    },
    apis: ["./routers/*.js"]
};



const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use(swStats.getMiddleware({swaggerSpec:apiSpec}));
app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.use(express.json())
app.use(keycloak.middleware());
app.use('/users',databaseRouter)
app.use(workActiveJobRouter)

app.listen(port, () => {
    console.log(`Server is running on ${port}`)
})