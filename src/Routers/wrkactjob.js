const express = require("express");
const connection = require("../Connection/connection").getConnection();
const { xmlToJson } = require('itoolkit')
const sqlData = require('../SQLParser/sqlData')
const router = new express.Router();
const keycloak = require('../Config/keycloak-config.js').getKeycloak();



/**
 * @swagger
 * /wrkactjob:
 *  get:
 *    tags: ["Work Active Job"]
 *    description: Use to request active job
 *  components:
 *    securitySchemes:
 *      BearerAuth:
 *        type: http
 *        scheme: bearer
 *        bearerFormat: JWT
 *  security:
 *  - bearerAuth: [] 
 *    parameters:
 *    - in: headers
 *      name: Authorization
 *      schema:
 *        type: apiKey
 *      value: Bearer <JWT>
 *    responses:
 *      '200':
 *        description: A successful response
 */
router.get("/wrkactjob",keycloak.protect('admin'), (req, res) => {
    
    const queryString = `SELECT JOB_NAME,JOB_TYPE,JOB_STATUS,SUBSYSTEM FROM TABLE(QSYS2.ACTIVE_JOB_INFO())`
    const sql = sqlData(queryString)
    connection.add(sql);

    connection.run((error, xmlOutput) => {
      if (error) {
        return res.status(500).send({ error });
      }
      const result = xmlToJson(xmlOutput);
      res.send(result);
    });
  });

module.exports = router;