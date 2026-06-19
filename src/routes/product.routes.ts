import { Router } from 'express'
import { ProductController } from '../controllers/product.controller'

const routes = Router()

const controller = new ProductController()

routes.get('/products', controller.findAll)
routes.post('/products', controller.create)

export default routes