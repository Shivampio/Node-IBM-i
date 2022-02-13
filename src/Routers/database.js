const express = require("express");
const connection = require("../Connection/connection").getConnection();
const { xmlToJson } = require("itoolkit");
const router = new express.Router();
const SqlParser = require("../SQLParser/SqlParser");
const keycloak = require('../Config/keycloak-config.js').getKeycloak();

const sql = new SqlParser("sriram.itmmast");


/**
 * @swagger
 * /users/all:
 *  get:
 *    tags: ["Users"]
 *    description: Use to request all customers
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
router.get("/",keycloak.protect('admin'), (req, res) => {
  connection.add(sql.find());

  connection.run((error, xmlOutput) => {
    if (error) {
      return res.status(500).send({ error });
    }
    const result = xmlToJson(xmlOutput);
    res.send(result);
  });
});


/**
 * @swagger
 * /users/{id}:
 *  get:
 *    tags: ["Users"]
 *    description: Use to request all customers
 *    components:
 *      securitySchemes:
 *        BearerAuth:
 *          type: http
 *          scheme: bearer
 *          bearerFormat: JWT
 *    security:
 *    - bearerAuth: [] 
 *    responses:
 *      '200':
 *        description: A successful response
 */
router.get("/:id",keycloak.protect('admin'), (req, res) => {

  connection.add(sql.find({ ITEMNO: req.params.id }));

  connection.run((error, xmlOutput) => {
    if (error) {
      return res.status(500).send({ error });
    }
    const [{result}] = xmlToJson(xmlOutput);
    if (!result) {
      return res.status(404).send({error : `User Id : ${req.params.id} not exist`})
    }
    res.send(result[0]);
  });
});

router.post("/insert",keycloak.protect('admin'), (req, res) => {

  connection.add(sql.insert(req.body));

  connection.run((error, xmlOutput) => {
    if (error) {
      return res.status(500).send({ error });
    }
    const result = xmlToJson(xmlOutput);
    res.send(result);
  });
});

router.delete("/:id",keycloak.protect('admin'), (req, res) => {
  connection.add(sql.delete({ ITEMNO: req.params.id }));

  connection.run((error, xmlOutput) => {
    if (error) {
      return res.status(500).send({ error });
    }
    const result = xmlToJson(xmlOutput);
    res.send(result);
  });
});

router.put("/:id",keycloak.protect('admin'), (req, res) => {

  connection.add(sql.update(req.body, { ITEMNO: req.params.id }));

  connection.run((error, xmlOutput) => {
    if (error) {
      return res.status(500).send({ error });
    }
    const result = xmlToJson(xmlOutput);
    res.send(result);
  });
});

module.exports = router;
