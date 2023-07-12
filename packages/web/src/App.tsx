import './App.scss';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './components/AppRouter';

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <AppRouter />
      </div>
    </BrowserRouter>
  );
}

export default App;
