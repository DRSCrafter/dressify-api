import mysql from "mysql2";

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'arasteh',
    password: 'sql0012',
    database: 'dbproject' // NOTE: It won't auto-create this database
});

export default connection;