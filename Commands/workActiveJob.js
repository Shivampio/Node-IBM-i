const { xmlToJson, CommandCall, Toolkit, SqlCall } = require('itoolkit')

const sqlData = (queryString) => {
    const sql = new SqlCall();
    sql.prepare(queryString);
    sql.execute();
    sql.fetch();
    sql.free();
    return sql;
};

const getWorkActiveJob = (connection) => {

    // const command = new CommandCall({ type: 'cl', command: 'WRKACTJOB' });
    // console.log(command.toXML())
    // connection.add(command);

    // connection.run((error, xmlOutput) => {
    //     console.log(error)
    //     if (error) {
    //         throw error;
    //     }
    //     console.log(xmlToJson(xmlOutput))
    // });

    // const toolkit = new Toolkit(connection);


    // toolkit.getSysStatus((error , value) => {
    //     console.log(error,value)
    // })

    // toolkit.getSysValue('QACTJOB', (error, value) => {
    //     console.log('in toolkit')
    //     if (error) {
    //         throw error;
    //     }
    //     console.log(`QACTJOB = ${value}`);
    // });

    connection.add(sqlData(`SELECT JOB_NAME,JOB_TYPE,JOB_STATUS,SUBSYSTEM FROM TABLE(QSYS2.ACTIVE_JOB_INFO())`));

    connection.run((error, xmlOutput) => {
        if (error) {
            console.log(error)
        }
        const result = xmlToJson(xmlOutput);
        console.log(result[0].result)
    });

    console.log('end')
}

module.exports = getWorkActiveJob;