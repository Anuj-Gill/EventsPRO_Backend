import {Router} from 'express'
import { RoleCheck } from '../middleware/roleCheckM.js';
import { FetchStatus, RegisterEvent } from '../controllers/eventsC.js';
const router = Router();

router.post("/registerEvent", RoleCheck(), RegisterEvent);
router.post("/checkstatus", RoleCheck(), FetchStatus);

export default router;