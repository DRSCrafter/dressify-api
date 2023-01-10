import express from "express";
import userController from "../controllers/userController.js";
import auth from "../middlewares/auth.js";

const router = express.Router();

router.get('/', userController.getUsers);
router.get('/:userID/orders', auth, userController.getOrders);
router.get('/:userID/latestorders', auth, userController.getLatestOrders);
router.get('/city/:city', userController.getUsersInCity);
router.get('/topweek', auth, userController.getTopWeek);
router.get('/topmonth', auth, userController.getTopMonth);
router.post('/', userController.signUp);
router.post('/login', userController.login);
router.post('/logout', auth, userController.logout);
router.put('/', auth, userController.editUser);
router.delete('/', auth, userController.deleteUser);

export default router;