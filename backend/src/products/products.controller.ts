import { Controller, Get, HttpStatus, HttpCode, Query } from "@nestjs/common";
import { ProductsService } from "./products.service";
import { ApiTags } from "@nestjs/swagger";
import { GetProductsDto } from "./dto/get-products.dto";

@ApiTags("Products")
@Controller({
  path: "products",
  version: "1",
})
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get()
  @HttpCode(HttpStatus.OK)
  findAll(@Query() getProductsDto: GetProductsDto) {
    console.log(getProductsDto);
  }
}
