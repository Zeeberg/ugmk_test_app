import styles from './styles.module.scss';
import { SELECT_PRODUCTS_FILTER } from '../../utils/constants';

interface SelectProductProps {
  saveFilter: (value: string) => void;
  filter: string | undefined;
}

export const SelectProduct = ({ saveFilter, filter }: SelectProductProps) => {
  return (
    <select
      className={styles.select}
      onChange={(e) => saveFilter(e.target.value)}
      defaultValue={filter || SELECT_PRODUCTS_FILTER[0].key}
      id="products-select"
      name="products"
    >
      {SELECT_PRODUCTS_FILTER.map((item) => (
        <option key={item.key} value={item.key}>
          {item.name}
        </option>
      ))}
    </select>
  );
};
