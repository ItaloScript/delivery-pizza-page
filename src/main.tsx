import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import ResponsiveAppBar from './layout';
import theme from './theme';
import { ThemeProvider } from '@emotion/react';
import MarketplacePage from './pages/marketplace';
import { ProductsProvider } from './context/products';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* <App /> */}
    <ThemeProvider theme={theme}>
      <ResponsiveAppBar>
        <ProductsProvider>
          <MarketplacePage />
        </ProductsProvider>
      </ResponsiveAppBar>
    </ThemeProvider>
  </React.StrictMode>,
)
