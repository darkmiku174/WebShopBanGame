import express from "express";
import { getAllGolf } from "../controllers/sampleControllers";

const router = express.Router();

router.route("/").get(getAllGolf);

export default router;
