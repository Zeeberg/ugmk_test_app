import { Injectable } from "@nestjs/common";
import { GetProductsDto } from "./dto/get-products.dto";
import { IProductsByMonth, ProductsRepository } from "./products.repository";
import { monthNames } from "../utils/types/month";

@Injectable()
export class ProductsService {
  constructor(private repository: ProductsRepository) {}

  async getBarChart(getProductsDto: GetProductsDto) {
    const products: IProductsByMonth[][] = [];
    for (let i = 1; i <= 12; i++) {
      const productsByMonth = await this.repository.getByMonth(
        getProductsDto,
        i
      );
      products.push(productsByMonth);
    }

    return products.map((product, index) => {
      return {
        name: monthNames[index],
        "1.factoryA": product[0].sum,
        "2.factoryA": product[1].sum,
        monthNumber: index + 1,
      };
    });
  }
}
