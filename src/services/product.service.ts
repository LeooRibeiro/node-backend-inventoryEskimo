import { ProductRepository } from '../repositories/product.repository'

export class ProductService {
  private repository = new ProductRepository()

  async getAllProducts() {
    return this.repository.findAll()
  }

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
}