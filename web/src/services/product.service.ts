import axios from 'axios';
import { IProductBarChart, IProductPieChart } from '../types/product.interface';

export const ProductService = {
  async getAll(filter?: string) {
    //TODO: move localhost to .env
    const response = await axios.get(`http://localhost:3001/api/v1/products/barchart${filter ? '?product=' + filter : ''}`)
    return response.data as IProductBarChart[];
  },

  async getByMonthAndFactory(monthNumber: string, factoryId: string) {
    const response = await axios.get(`http://localhost:3001/api/v1/products/detail?monthNumber=${monthNumber}&factoryId=${factoryId}`)

    return response.data as IProductPieChart[]

  },
};
