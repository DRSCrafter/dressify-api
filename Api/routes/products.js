import express from "express";
import productController from "../controllers/productController.js";

const router = express.Router();

router.get('/', productController.getProducts);
router.get('/categories', productController.getCategories);
router.get('/topweek', productController.getTopWeek);
router.get('/topmonth', productController.getTopMonth);
router.get('/specialmonth', productController.getSpecialOff);
router.get('/:productID/providers', productController.getProviders);
router.get('/:productID/cheapestprovider', productController.getCheapestProvider);
router.get('/:productID/comments', productController.getComments);
router.get('/:productID/bestcomments', productController.getBestComments);
router.get('/:productID/worstcomments', productController.getWorstComments);
router.get('/:productID/salesstats', productController.getSalesStats);
router.get('/:productID/averagesales', productController.getAverageSales);
router.post('/', productController.postProduct);
router.put('/', productController.editProduct);
router.delete('/', productController.deleteProduct);

export default router;