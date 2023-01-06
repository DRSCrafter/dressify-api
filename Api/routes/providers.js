import express from "express";
import providerController from "../controllers/providerController.js";

const router = express.Router();

router.get('/providers/city/:city', providerController.getProvidersInCity);

export default router;