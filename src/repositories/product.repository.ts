import { prisma } from "../database/prisma";
import { Prisma } from "@prisma/client";

export class ProductRepository {
  async findAll() {
    return prisma.estoque_db.findMany();
  }

//GET PRODUCT BY ID
  async findById(id: number) {
    return prisma.estoque_db.findUnique({
      where: {
        id,
      },
    });
  }

//CREATE A PRODUCT
  async create(data: {
    nome: string;
    qtd_unidade?: number;
    qtd_engradado?: number;
  }) {
    return prisma.estoque_db.create({
      data: {
        nome: data.nome,
        qtd_unidade: data.qtd_unidade
          ? new Prisma.Decimal(data.qtd_unidade)
          : null,
        qtd_engradado: data.qtd_engradado
          ? new Prisma.Decimal(data.qtd_engradado)
          : null,
      },
    });
  }

//UPDATE PRODUCT
async update(
  id: number,
  data: {
    nome: string
    qtd_unidade?: number
    qtd_engradado?: number
  }
) {
  return prisma.estoque_db.update({
    where: {
      id
    },
    data: {
      nome: data.nome,
      qtd_unidade: data.qtd_unidade
        ? new Prisma.Decimal(data.qtd_unidade)
        : null,
      qtd_engradado: data.qtd_engradado
        ? new Prisma.Decimal(data.qtd_engradado)
        : null
    }
  })
}

//DELETE PRODUCT
async delete(id: number) {
  return prisma.estoque_db.delete({
    where: {
      id
    }
  })
}
}
