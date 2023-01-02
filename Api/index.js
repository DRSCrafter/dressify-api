import express from 'express';
import cors from 'cors';
import routes from "./startup/routes.js";
import prod from "./startup/prod.js";
import mysql from 'mysql2';

const port = process.env.PORT || 8080;

const app = express();

app.use(express.json());
app.use(cors());

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'yourusername',
    password: 'yourpassword',
    database: 'dbproject' // NOTE: It won't auto-create this database
});

routes(app, connection);
prod(app);

app.listen(port, () => console.log(`Listening on Port ${port}...`));