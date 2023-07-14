import { ApiPropertyOptional } from "@nestjs/swagger";
import { IsIn, IsOptional } from "class-validator";

export class GetProductsDto {
  @ApiPropertyOptional()
  @IsIn(["product1", "product2"])
  @IsOptional()
  product?: string;
}
