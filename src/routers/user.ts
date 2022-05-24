import {Router} from 'express'
import { signUp, deletingUser, getAnUser, signIn , updateAnUser } from '../controllers/user';
import { isAdmin } from '../middlewares/authAdmin';
const router = Router();

router.post('/signup', signUp);
router.get('/:id', getAnUser);
router.put('/:id', updateAnUser);
router.delete('/:id', deletingUser);

//Login user
router.post('/signin', isAdmin, signIn)


export default router;