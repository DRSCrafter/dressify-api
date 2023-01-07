import express from "express";
import productController from "../controllers/productController.js";
import auth from "../middlewares/auth.js";
import admin from "../middlewares/admin.js";

const router = express.Router();

router.get('/', productController.getProducts);
router.get('/categories', productController.getCategories);
router.get('/topweek', productController.getTopWeek);
router.get('topmonth', productController.getTopMonth);
router.get('/specialmonth', productController.getSpecialOff);
router.get('/:productID/providers', [auth, admin], productController.getProviders);
router.get('/:productID/cheapestprovider', [auth, admin], productController.getCheapestProvider);
router.get('/:productID/comments', productController.getComments);
router.get('/:productID/bestcomments', productController.getBestComments);
router.get('/:productID/worstcomments', productController.getWorstComments);
router.get('/:productID/salesstats', [auth, admin], productController.getSalesStats);
router.get('/:productID/averagesales', [auth, admin], productController.getAverageSales);
router.post('/',[auth, admin], productController.postProduct);
router.put('/', [auth, admin], productController.editProduct);
router.delete('/', [auth, admin], productController.deleteProduct);

export default router;