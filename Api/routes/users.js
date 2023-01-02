import express from "express";
import userController from "../controllers/userController.js";

export default (connection) => {
    const router = express.Router();

    const controller = userController(connection);

    router.get('/', controller.getUsers);
    router.get('/:userID/:cart/orders', controller.getOrders);
    router.get('/:userID/topweek', controller.getTopWeek);
    router.get('/:userID/topmonth', controller.getTopMonth);
    router.get('/:userID/latestorders', controller.getLatestOrders);
    router.get('/city/:city', controller.getUsersInCity);
    router.post('/', controller.signUp);
    router.post('/login', controller.login);
    router.post('/logout', controller.logout);
    router.put('/', controller.editUser);
    router.delete('/', controller.deleteUser);
    router.delete('/immediate', controller.deleteUserImmediate);

    return router;
}