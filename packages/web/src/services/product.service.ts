import { IProductBarChart } from '../types/product.interface';

export const ProductService = {
  getAll() {
    const products = [
      {
        name: 'Янв',
        factoryA: 4000,
        factoryB: 2400,
      },
      {
        name: 'Фев',
        factoryA: 3000,
        factoryB: 1398,
      },
      {
        name: 'Мар',
        factoryA: 5000,
        factoryB: 1398,
      },
      {
        name: 'Апр',
        factoryA: 6000,
        factoryB: 1398,
      },
      {
        name: 'Май',
        factoryA: 7000,
        factoryB: 1398,
      },
      {
        name: 'Июн',
        factoryA: 9000,
        factoryB: 1398,
      },
      {
        name: 'Июл',
        factoryA: 3000,
        factoryB: 1398,
      },
      {
        name: 'Авг',
        factoryA: 3000,
        factoryB: 1398,
      },
      {
        name: 'Сен',
        factoryA: 3000,
        factoryB: 1398,
      },
      {
        name: 'Окт',
        factoryA: 3000,
        factoryB: 1398,
      },
      {
        name: 'Ноя',
        factoryA: 3000,
        factoryB: 1398,
      },
      {
        name: 'Дек',
        factoryA: 3000,
        factoryB: 1398,
      },
    ] as IProductBarChart[];

    return products;
  },
};
