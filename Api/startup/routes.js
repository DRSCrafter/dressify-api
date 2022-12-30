import test from '../routes/test.js';

export default function (app) {
    app.use("/api/test", test);
};
