import {Router} from 'express'
const router = Router();

import {allProducts, createProduct, deleteProduct, getProduct, updateProduct} from '../controllers/product'

router.get('/all', allProducts)
router.get('/:id', getProduct)
router.post('/create', createProduct)
/**Id is required */
router.put('/:id/edit', updateProduct)
router.delete('/:id/delete', deleteProduct)

export default router