import express from "express";
import userController from "../controllers/userController.js";
import auth from "../middlewares/auth.js";

const router = express.Router();

router.get('/', auth, userController.getUsers);
router.get('/orders', auth, userController.getOrders);
router.get('/latestorders', auth, userController.getLatestOrders);
router.get('/city/:city', userController.getUsersInCity);
router.get('/topweek', auth, userController.getTopWeek);
router.get('/topmonth', auth, userController.getTopMonth);
router.post('/', userController.signUp);
router.post('/login', userController.login);
router.post('/logout', auth, userController.logout);
router.post('/address', auth, userController.postAddress);
router.post('/phonenumber', auth, userController.postPhoneNumber);
router.put('/', auth, userController.editUser);
router.delete('/', auth, userController.deleteUser);
router.delete('/address', auth, userController.deleteAddress);
router.delete('/phonenumber', auth, userController.deletePhoneNumber);

export default router;