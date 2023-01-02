import test from '../routes/test.js';
import products from "../routes/products.js";
import users from "../routes/users.js";
import providers from "../routes/providers.js";

export default function (app, connection) {
    app.use("/api/test", test);
    app.use("/api/products", products(connection));
    app.use("/api/users", users(connection));
    app.use("/api/providers", providers(connection));
};
