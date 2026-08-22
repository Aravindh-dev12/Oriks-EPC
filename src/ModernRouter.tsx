import { useLocation } from 'react-router-dom';
import App from './App';
import HomeModern from './HomeModern';

export default function ModernRouter() {
  const location = useLocation();
  return location.pathname === '/' ? <HomeModern /> : <App />;
}
