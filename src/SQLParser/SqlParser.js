const sqlData = require('./sqlData')

const addWhereClause = (data) => {
  if (!data) return "";
  let queryString = `WHERE`;
  for (const key in data) {
    queryString += ` ${key}='${data[key]}' AND`;
  }
  return queryString.slice(0, -3);
};

class SqlParser {
  constructor(tableName) {
    this.table = tableName;
  }
  insert(data) {
    let keyString = ``;
    let valueString = ``;
    for (const key in data) {
      keyString += `${key},`;
      valueString += `'${data[key]}',`;
    }
    const queryString = `INSERT INTO ${this.table} (${keyString.slice(0, -1)}) VALUES (${valueString.slice(0,-1)}) with none`;
    return sqlData(queryString);
  }
  find(data) {
    return sqlData(`SELECT * FROM ${this.table} ${addWhereClause(data)}`);
  }
  delete(data) {
    return sqlData(`DELETE FROM ${this.table} ${addWhereClause(data)} with none`);
  }
  update(data, condition) {
    let queryString = `UPDATE ${this.table} SET `;
    for (const key in data) {
      queryString += `${key}='${data[key]}' ,`;
    }
    return sqlData(`${queryString.slice(0, -1)} ${addWhereClause(condition)} with none`);
  }
}

module.exports = SqlParser