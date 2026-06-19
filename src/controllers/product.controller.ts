import { Request, Response } from 'express'
import { ProductService } from '../services/product.service'

const service = new ProductService()

export class ProductController {
  async findAll(req: Request, res: Response) {
    const products = await service.getAllProducts()

    return res.json(products)
  }

  async create(req: Request, res: Response) {

  const {
    nome,
    qtd_unidade,
    qtd_engradado
  } = req.body

  const product = await service.createProduct(
    nome,
    qtd_unidade,
    qtd_engradado
  )

  return res.status(201).json(product)
}
}