import {Router} from 'express'
import { RoleCheck } from '../middleware/roleCheckM.js';
const router = Router();

router.post("/registerEvent", RoleCheck());

export default router;