import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import ModernRouter from './ModernRouter';
import './styles.css';
import './home-final.css';
import './home-link-fixes.css';
import './corporate-pages.css';
import './energy-footer-final.css';
import './home-purple.css';
import './purple-theme.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <ModernRouter />
    </BrowserRouter>
  </StrictMode>
);
