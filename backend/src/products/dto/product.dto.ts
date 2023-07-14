import { Products } from "../entities/products.entity";
import { Factory } from "../../factory/entities/factory.entity";

export class CsvToProduct {
  id: number;
  factory: Factory;
  date: Date;
  product1?: number | null;
  product2?: number | null;
  product3?: number | null;

  constructor(product: Products) {
    this.id = product.id;
    this.factory = product.factory;
    this.date = product.date;
    this.product1 = product.product1;
    this.product2 = product.product2;
    this.product3 = product.product3;
  }
}
