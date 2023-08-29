import { QueryClient, QueryClientProvider } from 'react-query';
import { ToastProvider } from './contexts/ToastContext';
import { Router } from './Router';

export function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <ToastProvider>
        <Router />
      </ToastProvider>
    </QueryClientProvider>
  );
}