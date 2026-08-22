import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import ModernRouter from './ModernRouter';
import './styles.css';
import './home-final.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <ModernRouter />
    </BrowserRouter>
  </StrictMode>
);
