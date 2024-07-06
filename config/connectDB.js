import mysql from "mysql2/promise"

const connection = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'Dev.Clickvps.4t7',
    database: '92lottery'
});

// const connection = mysql.createPool({
//     host: 'localhost',
//     user: 'admin',
//     password: 'Dph51mO5qkS8U1k',
//     database: '92lottery'
// });

export default connection;