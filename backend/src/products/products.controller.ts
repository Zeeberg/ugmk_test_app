import { Controller, Get, HttpStatus, HttpCode, Query } from "@nestjs/common";
import { ProductsService } from "./products.service";
import { ApiTags } from "@nestjs/swagger";
import { GetProductsDto } from "./dto/get-products.dto";
import { GetProductsDetailDto } from "./dto/get-products-detail.dto";

@ApiTags("Products")
@Controller({
  path: "products",
  version: "1",
})
export class ProductsController {
  constructor(private readonly service: ProductsService) {}

  @Get("barchart")
  @HttpCode(HttpStatus.OK)
  getBarChart(@Query() getProductsDto: GetProductsDto) {
    return this.service.getBarChart(getProductsDto);
  }

  @Get("detail")
  @HttpCode(HttpStatus.OK)
  getDetail(@Query() getProductsDetailDto: GetProductsDetailDto) {
    return this.service.getDetail(getProductsDetailDto);
  }
}
