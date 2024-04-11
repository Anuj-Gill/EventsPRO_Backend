import { Router } from "express";
import { RoleCheck } from "../middleware/roleCheckM.js";
import { FetchEvents } from "../controllers/adminC.js";
const router = Router();

router.get('/fetchEvents',RoleCheck(), FetchEvents);

export default router;

