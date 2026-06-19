import { ProductRepository } from '../repositories/product.repository'

export class ProductService {
  private repository = new ProductRepository()

  async getAllProducts() {
    return this.repository.findAll()
  }

//GET PRODUCT BY ID
  async getProductById(id: number) {

  const product = await this.repository.findById(id)

  if (!product) {
    throw new Error('Produto não encontrado')
  }

  return product
}

//CREATE A PRODUCT
  async createProduct(
  nome: string,
  qtd_unidade?: number,
  qtd_engradado?: number
) {

  if (!nome) {
    throw new Error('Nome é obrigatório')
  }

  return this.repository.create({
    nome,
    qtd_unidade,
    qtd_engradado
  })
}

//UPDATE A PRODUCT
async updateProduct(
  id: number,
  nome: string,
  qtd_unidade?: number,
  qtd_engradado?: number
) {

  const product = await this.repository.findById(id)

  if (!product) {
    throw new Error('Produto não encontrado')
  }

  return this.repository.update(id, {
    nome,
    qtd_unidade,
    qtd_engradado
  })
}

//DELETE PRODUCT
async deleteProduct(id: number) {

  const product = await this.repository.findById(id)

  if (!product) {
    throw new Error('Produto não encontrado')
  }

  await this.repository.delete(id)
}
}