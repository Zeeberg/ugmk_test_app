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
import { useNavigate, useParams } from 'react-router-dom';
import { SelectProduct } from '../../components/Select/SelectProduct';
import { SELECT_PRODUCTS_FILTER } from '../../utils/constants';

const Products = () => {
  const navigate = useNavigate();
  const [productsData, setProductsData] = useState<IProductBarChart[]>([]);

  const { filterName } = useParams();
  const foundFilter = SELECT_PRODUCTS_FILTER.find(
    (filter) => filter.key === filterName,
  )?.key;

  const [filter, setFilter] = useState(
    foundFilter || SELECT_PRODUCTS_FILTER[0].key,
  );

  const fetchData = async (filter?:string) =>{
    const products = await ProductService.getAll(filter);
    setProductsData(products);
  }

  useEffect(() => {
    fetchData(filter)
  }, [filter]);

  useEffect(() => {
    if (!foundFilter) {
      navigate('/');
    }
  }, []);

  const saveFilter = (target: string) => {
    navigate(`/${target}`);
    setFilter(target);
  };

  const toDetailProductPage = (data: {
    tooltipPayload: { dataKey: string }[];
    monthNumber: number;
  }) => {
    const factoryId = String(data.tooltipPayload[0].dataKey.split('.')[0]);
    const monthNumber = String(data.monthNumber);

    navigate(`/details/${factoryId}/${monthNumber}`, {
      state: { filter, data },
    });
  };

  return (
    <>
    <div className={styles['products-wrapper']}>
      <div>
        <SelectProduct saveFilter={saveFilter} filter={filter} />
      </div>
      <BarChart width={1000} height={400} data={productsData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar
          dataKey="1.factoryA"
          name="Фабрика А"
          fill="#ff0000"
          // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
          onClick={(data) => toDetailProductPage(data)}
        />
        <Bar
          dataKey="2.factoryB"
          name="Фабрика Б"
          fill="#0000ff"
          // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
          onClick={(data) => toDetailProductPage(data)}
        />
      </BarChart>

      </div>
    </>
  );
};

export default Products;
