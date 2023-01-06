import express from 'express';
import cors from 'cors';
import routes from "./startup/routes.js";
import prod from "./startup/prod.js";

const port = process.env.PORT || 8080;

const app = express();

app.use(express.json());
app.use(cors());

routes(app);
prod(app);

app.listen(port, () => console.log(`Listening on Port ${port}...`));