import { Router } from "express";
import { RoleCheck } from "../middleware/roleCheckM.js";
import { FetchEvents, UpdateStatus } from "../controllers/adminC.js";
const router = Router();

router.get('/fetchEvents',RoleCheck(), FetchEvents);
router.post('/updateStatus',RoleCheck(), UpdateStatus );
 
export default router;

