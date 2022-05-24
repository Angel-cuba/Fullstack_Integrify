import {Router} from 'express'
import { signUp, deletingUser, getAnUser, signIn , updateAnUser } from '../controllers/user';
const router = Router();

router.post('/signup', signUp);
router.get('/:id', getAnUser);
router.put('/:id', updateAnUser);
router.delete('/:id', deletingUser);

//Login user
router.post('/signin', signIn)


export default router;