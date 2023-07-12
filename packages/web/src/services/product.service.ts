import { IProductBarChart } from '../types/product.interface';

export const ProductService = {
  getAll() {
    const products = [
      {
        monthName: 'Янв',
        '1.factoryA': 4000,
        '2.factoryB': 2400,
        monthNumber: 1,
      },
      {
        monthName: 'Фев',
        '1.factoryA': 3000,
        '2.factoryB': 1398,
        monthNumber: 2,
      },
      {
        monthName: 'Мар',
        '1.factoryA': 5000,
        '2.factoryB': 1398,
        monthNumber: 3,
      },
      {
        monthName: 'Апр',
        '1.factoryA': 6000,
        '2.factoryB': 1398,
        monthNumber: 4,
      },
      {
        monthName: 'Май',
        '1.factoryA': 7000,
        '2.factoryB': 1398,
        monthNumber: 5,
      },
      {
        monthName: 'Июн',
        '1.factoryA': 9000,
        '2.factoryB': 1398,
        monthNumber: 6,
      },
      {
        monthName: 'Июл',
        '1.factoryA': 3000,
        '2.factoryB': 1398,
        monthNumber: 7,
      },
      {
        monthName: 'Авг',
        '1.factoryA': 3000,
        '2.factoryB': 1398,
        monthNumber: 8,
      },
      {
        monthName: 'Сен',
        '1.factoryA': 3000,
        '2.factoryB': 1398,
        monthNumber: 9,
      },
      {
        monthName: 'Окт',
        '1.factoryA': 3000,
        '2.factoryB': 1398,
        monthNumber: 10,
      },
      {
        monthName: 'Ноя',
        '1.factoryA': 3000,
        '2.factoryB': 1398,
        monthNumber: 11,
      },
      {
        monthName: 'Дек',
        '1.factoryA': 3000,
        monthNumber: 12,
      },
    ] as IProductBarChart[];

    return products;
  },
};
