import { Router } from 'express'
import { ProductController } from '../controllers/product.controller'

const routes = Router()

const controller = new ProductController()

routes.get('/products', controller.findAll)
routes.get('/products/:id', controller.findById)
routes.post('/products', controller.create)
routes.put('/products/:id', controller.update)
routes.delete('/products/:id', controller.delete)

export default routes