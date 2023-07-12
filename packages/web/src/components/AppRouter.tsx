import { Route, Routes, useNavigate, useParams } from 'react-router-dom';
import Products from '../pages/Products/Products';
import DetailProduct from '../pages/Products/DetailProduct';

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Products />} />
      <Route path="/:filterName" element={<Products />} />
      <Route
        path="/details/:factoryId/:monthNumber"
        element={<DetailProduct />}
      />
    </Routes>
  );
};

export default AppRouter;
