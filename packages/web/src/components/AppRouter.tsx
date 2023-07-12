import { Navigate, Route, Routes } from 'react-router-dom';
import Products from '../pages/Products/Products';

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Products />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default AppRouter;
