import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { PianoPage } from './pages/piano';
import { AlbumPage } from './pages/album';
import { WorkerChoicePage } from './pages/worker-choice';

export function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        {/* <Header /> */}
        <Routes>
          {/* <Route path="/" element={<Main />}></Route> */}
          <Route path="/piano" element={<PianoPage />}></Route>
          <Route path="/album" element={<AlbumPage />}></Route>
          <Route path="/worker-choice" element={<WorkerChoicePage />}></Route>
          {/* <Route path="*" element={<NotFound />}></Route> */}
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}