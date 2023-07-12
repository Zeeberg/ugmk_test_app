import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import styles from './styles.module.scss';
import { useEffect, useState } from 'react';
import { ProductService } from '../../services/product.service';
import { IProductBarChart } from '../../types/product.interface';

const Products = () => {
  const [productsData, setProductsData] = useState<IProductBarChart[]>([]);

  useEffect(() => {
    const products = ProductService.getAll();
    setProductsData(products);
  }, []);

  return (
    <div className={styles['products-wrapper']}>
      <BarChart width={1000} height={400} data={productsData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="factoryA" name="Фабрика А" fill="#8884d8" />
        <Bar dataKey="factoryB" name="Фабрика Б" fill="#82ca9d" />
      </BarChart>
    </div>
  );
};

export default Products;
