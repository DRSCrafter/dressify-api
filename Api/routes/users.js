import express from "express";
import userController from "../controllers/userController.js";
import auth from "../middlewares/auth.js";

const router = express.Router();

router.get('/', userController.getUsers);
router.get('/:userID/:cart/orders', auth, userController.getOrders);
router.get('/:userID/topweek', auth, userController.getTopWeek);
router.get('/:userID/topmonth', auth, userController.getTopMonth);
router.get('/:userID/latestorders', auth, userController.getLatestOrders);
router.get('/city/:city', userController.getUsersInCity);
router.post('/', userController.signUp);
router.post('/login', userController.login);
router.post('/logout', auth, userController.logout);
router.put('/', auth, userController.editUser);
router.delete('/', auth, userController.deleteUser);

export default router;