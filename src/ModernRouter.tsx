import { useLocation } from 'react-router-dom';
import App from './App';
import HomePurple from './HomePurple';

export default function ModernRouter() {
  const location = useLocation();
  return location.pathname === '/' ? <HomePurple /> : <App />;
}
