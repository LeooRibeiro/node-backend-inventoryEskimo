import { Request, Response } from 'express'
import { ProductService } from '../services/product.service'

const service = new ProductService()

export class ProductController {
  async findAll(req: Request, res: Response) {
    const products = await service.getAllProducts()

    return res.json(products)
  }

//GET PRODUCT BY ID
async findById(req: Request, res: Response) {

  try {

    const id = Number(req.params.id)

    const product = await service.getProductById(id)

    return res.json(product)

  } catch (error: any) {

    return res.status(404).json({
      message: error.message
    })

  }
}

// CREATE A PRODUCT
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

//UPDATE PRODUCT 
async update(req: Request, res: Response) {

  try {

    const id = Number(req.params.id)

    const {
      nome,
      qtd_unidade,
      qtd_engradado
    } = req.body

    const product = await service.updateProduct(
      id,
      nome,
      qtd_unidade,
      qtd_engradado
    )

    return res.json(product)

  } catch (error: any) {

    return res.status(404).json({
      message: error.message
    })

  }
}

//DELETE PRODUCT
async delete(req: Request, res: Response) {

  try {

    const id = Number(req.params.id)

    await service.deleteProduct(id)

    return res.status(204).send()

  } catch (error: any) {

    return res.status(404).json({
      message: error.message
    })

  }
}
}