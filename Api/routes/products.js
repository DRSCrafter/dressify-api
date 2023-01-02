import express from "express";
import productController from "../controllers/productController.js";

export default (connection) => {
    const router = express.Router();

    const controller = productController(connection);

    router.get('/', controller.getProducts);
    router.get('/categories', controller.getCategories);
    router.get('/topweek', controller.getTopWeek);
    router.get('topmonth', controller.getTopMonth);
    router.get('/specialmonth', controller.getSpecialOff);
    router.get('/:productID/providers', controller.getProviders);
    router.get('/:productID/cheapestprovider', controller.getCheapestProvider);
    router.get('/:productID/comments', controller.getComments);
    router.get('/:productID/bestcomments', controller.getBestComments);
    router.get('/:productID/worstcomments', controller.getWorstComments);
    router.get('/:productID/salesstats', controller.getSalesStats);
    router.get('/:productID/averagesales', controller.getAverageSales);
    router.post('/', controller.postProduct);
    router.put('/', controller.editProduct);
    router.delete('/', controller.deleteProduct);

    return router;
}