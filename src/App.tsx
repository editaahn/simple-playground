import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { PianoPage } from './pages/piano';

export function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        {/* <Header /> */}
        <Routes>
          {/* <Route path="/" element={<Main />}></Route> */}
          <Route path="/piano" element={<PianoPage />}></Route>
          {/* <Route path="*" element={<NotFound />}></Route> */}
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}