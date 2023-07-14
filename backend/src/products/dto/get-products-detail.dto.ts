import { ApiProperty } from "@nestjs/swagger";
import { IsNumberString } from "class-validator";

export class GetProductsDetailDto {
  @ApiProperty()
  @IsNumberString()
  monthNumber?: number;

  @ApiProperty()
  @IsNumberString()
  factoryId?: number;
}
