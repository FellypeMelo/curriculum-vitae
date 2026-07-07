import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

// Self-hosted variable fonts (no runtime Google Fonts request).
import '@fontsource-variable/bricolage-grotesque';
import '@fontsource-variable/archivo';
import '@fontsource-variable/geist-mono';

import './index.css';
import App from './App.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
