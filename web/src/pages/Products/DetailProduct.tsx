import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { ProductService } from '../../services/product.service';
import { IProductPieChart } from '../../types/product.interface';
import {
  Cell,
  LabelList,
  Legend,
  Pie,
  PieChart,
} from 'recharts';
import { PIE_CELL_COLORS } from '../../utils/constants';
import styles from './styles.module.scss';

const DetailProduct = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [productData, setProductData] = useState<IProductPieChart[]>([]);

  const { data, filter } = location.state as {
    data: {
      tooltipPayload: { name: string }[];
      name: string;
    };
    filter: string;
  };

  const returnProductsPage = () => {
    navigate(`/${filter}`);
  };

  const fetchData = async (monthNumber: string, factoryId: string) => {
    const productsDetail = await ProductService.getByMonthAndFactory(monthNumber, factoryId)
    setProductData(productsDetail);
  }

  useEffect(() => {
    const monthNumber = location.pathname.split('/')[3]
    const factoryId = location.pathname.split('/')[2]
    fetchData(monthNumber, factoryId)
  }, []);

  return (
    <div>
      <button onClick={() => returnProductsPage()}>НАЗАД</button>
      <h1>
        Статистика продукции {data.tooltipPayload[0].name} за {data.name}
      </h1>
      <div className={styles['product-detail']}>
        <PieChart width={400} height={400}>
          <Legend />
          <Pie data={productData} cx="50%" cy="50%" dataKey="value">
            <LabelList
              dataKey="value"
              position="outside"
              offset={15}
              stroke="none"
            />
            {productData.map((item, index) => (
              <Cell key={item.name} fill={PIE_CELL_COLORS[index]} />
            ))}
          </Pie>
        </PieChart>
      </div>

    </div>
  );
};

export default DetailProduct;
