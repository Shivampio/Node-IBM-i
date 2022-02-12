const express = require("express");
// const swaggerJsDoc = require("swagger-jsdoc");
// const swaggerUi = require("swagger-ui-express");
const connection = require("../connection");
const { xmlToJson } = require("itoolkit");
const router = new express.Router();
const SqlParser = require("../SQL-Parser/SqlParser");
const { SqlCall } = require('itoolkit')
// const keycloak = require('../config/keycloak-config.js').getKeycloak();

const sql = new SqlParser("sriram.itmmast");

const sqlData = (queryString) => {
  const sql = new SqlCall();
  sql.prepare(queryString);
  sql.execute();
  sql.fetch();
  sql.free();
  return sql;
};


/**
 * @swagger
 * /test:
 *  get:
 *    description: Use to request all customers
 *    responses:
 *      '200':
 *        description: A successful response
 */
router.get("/test", (req, res) => {
  // res.send("Working...")
  connection.add(sql.find());

  connection.run((error, xmlOutput) => {
    if (error) {
      return res.status(500).send({ error });
    }
    const result = xmlToJson(xmlOutput);
    res.send(result);
  });
})



router.get("/table", (req, res) => {

  const queryString = `SELECT * FROM TABLE (QSYS2.OBJECT_STATISTICS('QSYS','PGM SRVPGM','*ALLSIMPLE')) with none`

  connection.add(sqlData(queryString));

  connection.run((error, xmlOutput) => {
    if (error) {
      return res.status(500).send({ error });
    }
    const result = xmlToJson(xmlOutput);
    res.send(result);
  });
})

// router.get("/all",keycloak.protect('user'), (req, res) => {
//   connection.add(sql.find());

//   connection.run((error, xmlOutput) => {
//     if (error) {
//       return res.status(500).send({ error });
//     }
//     const result = xmlToJson(xmlOutput);
//     res.send(result);
//   });
// });

router.get("/:id", (req, res) => {

  connection.add(sql.find({ ITEMNO: req.params.id }));

  connection.run((error, xmlOutput) => {
    if (error) {
      return res.status(500).send({ error });
    }
    const result = xmlToJson(xmlOutput);
    res.send(result[0].result);
  });
});

router.post("/insert", (req, res) => {

  connection.add(sql.insert(req.body));

  connection.run((error, xmlOutput) => {
    if (error) {
      return res.status(500).send({ error });
    }
    //console.log(xmlOutput);
    const result = xmlToJson(xmlOutput);
    res.send(result);
  });
});

router.delete("/:id", (req, res) => {
  connection.add(sql.delete({ ITEMNO: req.params.id }));

  connection.run((error, xmlOutput) => {
    if (error) {
      return res.status(500).send({ error });
    }
    const result = xmlToJson(xmlOutput);
    console.log(result);
    res.send(result);
  });
});

router.put("/:id", (req, res) => {

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
