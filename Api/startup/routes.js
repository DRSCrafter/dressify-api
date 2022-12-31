import test from '../routes/test.js';
import products from "../routes/products.js";
import users from "../routes/users.js";
import providers from "../routes/providers.js";

export default function (app) {
    app.use("/api/test", test);
    app.use("/api/products", products);
    app.use("/api/users", users);
    app.use("/api/providers", providers);
};
