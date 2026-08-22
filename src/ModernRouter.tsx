import { useLocation } from 'react-router-dom';
import App from './App';
import HomeRealistic from './HomeRealistic';

export default function ModernRouter() {
  const location = useLocation();
  return location.pathname === '/' ? <HomeRealistic /> : <App />;
}
