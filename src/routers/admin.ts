import {Router} from 'express'
import { allUsersFromDatabase } from '../controllers/admin';
import { signUp, deletingUser, getAnUser, signIn , updateAnUser } from '../controllers/user';
import { isAdmin } from '../middlewares/authAdmin';
const router = Router();

router.get('/admin', allUsersFromDatabase);

export default router;