import { createRoot } from 'react-dom/client';
import { BrowserRouter, useRoutes } from 'react-router-dom';
import routes from './routes';
import { Suspense } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { WagmiProvider } from 'wagmi'
import { config } from './config/wagmi.config';
import { ThemeProvider } from '@mui/material/styles';
import { darkTheme } from '@/utils/muiTheme';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import './index.css';
import "./wdyr";

const container = document.getElementById('app')
if(!container) {
  throw new Error('Failed to find the root element')  
}
// 创建 root
const root = createRoot(container);
// helmet params
const helmetContext = {};
// 创建 QueryClient
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      refetchOnWindowFocus: false,
    },
  },
});

const App = () => {
  const renderRoutes = useRoutes(routes);

  return (
    <QueryClientProvider client={queryClient}>
      <HelmetProvider context={helmetContext}>
        <WagmiProvider config={config}>
          <ThemeProvider theme={darkTheme}>
            <Suspense>{renderRoutes}</Suspense>
          </ThemeProvider>
        </WagmiProvider>
      </HelmetProvider>
    </QueryClientProvider>
  );
};

const AppWithRouter = () => {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
};

App.whyDidYouRender = true; // Enable WDYR for this component
root.render(<AppWithRouter />);
