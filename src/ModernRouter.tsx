import { useLocation } from 'react-router-dom';
import App from './App';
import HomeFinal from './HomeFinal';

export default function ModernRouter() {
  const location = useLocation();
  return location.pathname === '/' ? <HomeFinal /> : <App />;
}
