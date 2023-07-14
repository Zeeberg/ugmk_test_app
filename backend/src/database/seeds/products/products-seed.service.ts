import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Products } from "../../../products/entities/products.entity";
import { readFileSync } from "fs";
import { parse } from "papaparse";
import path from "path";
import { Factory } from "../../../factory/entities/factory.entity";

interface ICsvProducts {
  id: string;
  factory_id: string;
  date: string;
  product1: string;
  product2: string;
  product3: string;
}

@Injectable()
export class ProductsSeedService {
  constructor(
    @InjectRepository(Products)
    private repository: Repository<Products>,
    @InjectRepository(Factory)
    private factoryRepository: Repository<Factory>
  ) {}

  async run() {
    const parsedCsv = await this.getParsedFile();

    const existsProducts = await this.repository.find();

    existsProducts.forEach(async (product) => await product.remove());

    const factoryA = await this.factoryRepository.findOne({
      where: { id: 1 },
    });
    if (!factoryA) {
      throw new Error("FactoryA not found");
    }
    const factoryB = await this.factoryRepository.findOne({
      where: { id: 2 },
    });
    if (!factoryB) {
      throw new Error("FactoryA not found");
    }

    const products = parsedCsv.map((item) => {
      let date: null | Date = null;

      if (item.date) {
        const spittedDate = item.date.split("/");
        date = new Date(
          +spittedDate[2],
          +spittedDate[1] - 1,
          +spittedDate[0],
          0,
          0,
          0,
          0
        );
      }
      return new Products({
        id: item.id,
        factory: +item.factory_id === 1 ? factoryA : factoryB,
        date: date ?? null,
        product1: +item.product1,
        product2: +item.product2,
        product3: +item.product3,
      });
    });

    await this.repository.save(products);
  }

  private async getParsedFile() {
    const csvFile = readFileSync(path.join(__dirname, "products.csv"));
    const csvData = csvFile.toString();

    const parsedCsv = await parse(csvData, {
      header: true,
      skipEmptyLines: true,
    });
    return parsedCsv.data as ICsvProducts[];
  }
}
