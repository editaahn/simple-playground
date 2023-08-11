import { BrowserRouter, Routes, Route } from '../node_modules/react-router-dom/dist/index';
import { PianoPage } from './pages/piano';

export function App() {
  return (
    <BrowserRouter>
      {/* <Header /> */}
      <Routes>
        {/* <Route path="/" element={<Main />}></Route> */}
        <Route path="/piano" element={<PianoPage />}></Route>
        {/* <Route path="*" element={<NotFound />}></Route> */}
      </Routes>
    </BrowserRouter>
  );
}