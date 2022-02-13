const express = require('express');
const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
const keycloak = require('./config/keycloak-config.js').initKeycloak();
const databaseRouter = require('./database/database');
const swStats = require('swagger-stats');
const apiSpec = require('./swagger.json');



const app = express()
const port = 3000

const swaggerOptions = {
    swaggerDefinition: {
        info: {
            version: "1.0.0",
            title: "User API",
            description: "User API Information",
            contact: {
                name: "Amazing Developer"
            },
            servers: ["http://localhost:3000"]
        }
    },
    apis: ["./database/database.js"]
};



const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));
app.use(swStats.getMiddleware({swaggerSpec:apiSpec}));

app.use(express.json())
app.use(keycloak.middleware());
// app.use(keycloak.middleware({
//     all: '/all',
//     admin: '/all'
//   }));
app.use(databaseRouter)

app.listen(port, () => {
    console.log(`Server is running on ${port}`)
})