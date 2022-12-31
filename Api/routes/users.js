import express from "express";
import userController from "../controllers/userController.js";

const router = express.Router();

router.get('/', userController.getUsers);
router.get('/:userID/:cart/orders', userController.getOrders);
router.get('/:userID/topweek', userController.getTopWeek);
router.get('/:userID/topmonth', userController.getTopMonth);
router.get('/:userID/latestorders', userController.getLatestOrders);
router.get('/city/:city', userController.getUsersInCity);
router.post('/', userController.signUp);
router.post('/login', userController.login);
router.post('/logout', userController.logout);
router.put('/', userController.editUser);
router.delete('/', userController.deleteUser);
router.delete('/immediate', userController.deleteUserImmediate);

export default router;