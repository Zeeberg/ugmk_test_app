import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Factory } from "../../../factory/entities/factory.entity";
import { FactorySeedService } from "./factory-seed.service";

@Module({
  imports: [TypeOrmModule.forFeature([Factory])],
  providers: [FactorySeedService],
  exports: [FactorySeedService],
})
export class FactorySeedModule {}
