import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ProductsSeedService } from "./products-seed.service";
import { Products } from "../../../products/entities/products.entity";
import { Factory } from "../../../factory/entities/factory.entity";

@Module({
  imports: [TypeOrmModule.forFeature([Products, Factory])],
  providers: [ProductsSeedService],
  exports: [ProductsSeedService],
})
export class ProductsSeedModule {}
