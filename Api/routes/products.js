import express from "express";
import productController from "../controllers/productController.js";
import auth from "../middlewares/auth.js";

const router = express.Router();

router.get('/', productController.getProducts);
router.get('/categories', productController.getCategories);
router.get('/topweek', productController.getTopWeek);
router.get('/topmonth', productController.getTopMonth);
router.get('/specialmonth', productController.getSpecialOff);
router.get('/:productID/providers', auth, productController.getProviders);
router.get('/:productID/cheapestprovider', auth, productController.getCheapestProvider);
router.get('/:productID/comments', productController.getComments);
router.get('/:productID/bestcomments', productController.getBestComments);
router.get('/:productID/worstcomments', productController.getWorstComments);
router.get('/:productID/salesstats', auth, productController.getSalesStats);
router.get('/:productID/averagesales', auth, productController.getAverageSales);
router.post('/', auth, productController.postProduct);
router.put('/', auth, productController.editProduct);
router.delete('/', auth, productController.deleteProduct);

export default router;