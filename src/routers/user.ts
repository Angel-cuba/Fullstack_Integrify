import {Router} from 'express'
import { createUser, deletingUser, getAnUser, loginUser, updateAnUser } from '../controllers/user';
const router = Router();

router.post('/newUser', createUser);
router.get('/:id', getAnUser);
router.put('/:id', updateAnUser);
router.delete('/:id', deletingUser);

//Login user
router.post('/login', loginUser)


export default router;