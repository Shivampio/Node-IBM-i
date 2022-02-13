const { SqlCall } = require('itoolkit')

const sqlData = (queryString) => {
    const sql = new SqlCall();
    sql.prepare(queryString);
    sql.execute();
    sql.fetch();
    sql.free();
    return sql;
};

module.exports = sqlData