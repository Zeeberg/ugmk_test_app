import { DataSource, Repository } from "typeorm";

import { Injectable } from "@nestjs/common";
import { Products } from "./entities/products.entity";
import { GetProductsDto } from "./dto/get-products.dto";
import { GetProductsDetailDto } from "./dto/get-products-detail.dto";

export interface IProductsByMonth {
  productId: number;
  productName: string;
  sum: number;
  monthNumber: number;
}

export interface IProductsDetail {
  product1: number;
  product2: number;
  product3: number;
}
@Injectable()
export class ProductsRepository extends Repository<Products> {
  constructor(private dataSource: DataSource) {
    super(Products, dataSource.createEntityManager());
  }

  async getByMonth(
    filter: GetProductsDto,
    month: number
  ): Promise<IProductsByMonth[]> {
    const { product } = filter;
    const query = this.createQueryBuilder("products")
      .leftJoinAndSelect("products.factory", "products_factory")
      .select([
        "products_factory",
        "SUM(products.product1) + SUM(products.product2) + SUM(products.product3) as sum",
      ])
      .select(`${month} as "monthNumber"`)
      .groupBy("products_factory.id")
      .where("EXTRACT(MONTH FROM products.date) = :month", {
        month,
      });

    if (product === "product1") {
      query.addSelect(["products_factory", "SUM(products.product1) as sum"]);
    } else if (product === "product2") {
      query.addSelect(["products_factory", "SUM(products.product2) as sum"]);
    } else if (product === "product3") {
      query.addSelect(["products_factory", "SUM(products.product3) as sum"]);
    } else {
      query.addSelect([
        "products_factory",
        "SUM(products.product1) + SUM(products.product2) + SUM(products.product3) as sum",
      ]);
    }

    const res = await query.getRawMany();

    return res as IProductsByMonth[];
  }

  async getByMonthAndFactory(
    filter: GetProductsDetailDto
  ): Promise<IProductsDetail> {
    const { monthNumber, factoryId } = filter;
    const query = this.createQueryBuilder("products")
      .leftJoinAndSelect("products.factory", "products_factory")
      .select([
        "SUM(products.product1) as product1",
        "SUM(products.product2) as product2",
        "SUM(products.product3) as product3",
      ])
      .groupBy("products_factory.id")
      .where("EXTRACT(MONTH FROM products.date) = :monthNumber", {
        monthNumber,
      })
      .andWhere("products_factory.id = :factoryId", {
        factoryId,
      });

    const res = await query.getRawOne();

    return res as unknown as IProductsDetail;
  }
}
