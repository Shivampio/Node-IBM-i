const express = require("express");
const connection = require("../connection");
const { xmlToJson } = require("itoolkit");
const router = new express.Router();
const SqlParser = require("../SQL-Parser/SqlParser");

const sql = new SqlParser("sriram.itmmast");

router.get("/all", (req, res) => {
  connection.add(sql.find());

  connection.run((error, xmlOutput) => {
    if (error) {
      return res.status(500).send({ error });
    }
    const result = xmlToJson(xmlOutput);
    res.send(result);
  });
});

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
