import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { PianoPage } from './pages/piano';
import { AlbumPage } from './pages/album';
import { EmployeeChoicePage } from './pages/employee-choice';
import { ToastProvider } from './contexts/ToastContext';
import { CategoryListPage } from './pages/category-list';

export function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        {/* <Header /> */}
        <ToastProvider>
          <Routes>
            {/* <Route path="/" element={<Main />}></Route> */}
            <Route path="/piano" element={<PianoPage />}></Route>
            <Route path="/album" element={<AlbumPage />}></Route>
            <Route path="/worker-choice" element={<EmployeeChoicePage />}></Route>
            <Route path="/category-list" element={<CategoryListPage />}></Route>
            {/* <Route path="*" element={<NotFound />}></Route> */}
          </Routes>
        </ToastProvider>
      </BrowserRouter>
    </QueryClientProvider>
  );
}