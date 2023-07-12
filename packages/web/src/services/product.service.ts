import { IProductBarChart, IProductPieChart } from '../types/product.interface';

export const ProductService = {
  getAll() {
    const products = [
      {
        name: 'Янв',
        '1.factoryA': 4000,
        '2.factoryB': 2400,
        monthNumber: 1,
      },
      {
        name: 'Фев',
        '1.factoryA': 3000,
        '2.factoryB': 1398,
        monthNumber: 2,
      },
      {
        name: 'Мар',
        '1.factoryA': 5000,
        '2.factoryB': 1398,
        monthNumber: 3,
      },
      {
        name: 'Апр',
        '1.factoryA': 6000,
        '2.factoryB': 1398,
        monthNumber: 4,
      },
      {
        name: 'Май',
        '1.factoryA': 7000,
        '2.factoryB': 1398,
        monthNumber: 5,
      },
      {
        name: 'Июн',
        '1.factoryA': 9000,
        '2.factoryB': 1398,
        monthNumber: 6,
      },
      {
        name: 'Июл',
        '1.factoryA': 3000,
        '2.factoryB': 1398,
        monthNumber: 7,
      },
      {
        name: 'Авг',
        '1.factoryA': 3000,
        '2.factoryB': 1398,
        monthNumber: 8,
      },
      {
        name: 'Сен',
        '1.factoryA': 3000,
        '2.factoryB': 1398,
        monthNumber: 9,
      },
      {
        name: 'Окт',
        '1.factoryA': 3000,
        '2.factoryB': 1398,
        monthNumber: 10,
      },
      {
        name: 'Ноя',
        '1.factoryA': 3000,
        '2.factoryB': 1398,
        monthNumber: 11,
      },
      {
        name: 'Дек',
        '1.factoryA': 3000,
        monthNumber: 12,
      },
    ] as IProductBarChart[];

    return products;
  },

  getByMonthAndFactory() {
    return [
      { name: 'Продукт 1', value: 100 },
      { name: 'Продукт 2', value: 2000 },
    ] as IProductPieChart[];
  },
};
