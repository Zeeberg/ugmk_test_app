import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Factory } from "../../../factory/entities/factory.entity";

@Injectable()
export class FactorySeedService {
  constructor(
    @InjectRepository(Factory)
    private repository: Repository<Factory>
  ) {}

  async run() {
    const countFactoryA = await this.repository.count({
      where: {
        name: "factoryA",
      },
    });

    if (!countFactoryA) {
      await this.repository.save(
        this.repository.create({
          id: 1,
          name: "factoryA",
        })
      );
    }

    const countFactoryB = await this.repository.count({
      where: {
        name: "factoryB",
      },
    });

    if (!countFactoryB) {
      await this.repository.save(
        this.repository.create({
          id: 2,
          name: "factoryB",
        })
      );
    }
  }
}
