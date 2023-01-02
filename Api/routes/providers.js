import express from "express";
import providerController from "../controllers/providerController.js";

export default (connection) => {
    const router = express.Router();

    const controller = providerController(connection);

    router.get('/providers/city/:city', controller.getProvidersInCity);

    return router;
}