export class ProductsDetailResDto {
  name: string;
  value: number;

  constructor(name: string, value: number) {
    this.name = "Продукт " + name.match(/\d/g)?.join();
    this.value = value / 1000;
  }
}
