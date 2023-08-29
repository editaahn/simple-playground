import type { FC, PropsWithChildren } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AlbumPage } from './pages/album';
import { CategoryListPage } from './pages/category-list';
import { EmployeeChoicePage } from './pages/employee-choice';
import { MainPage } from './pages/main';
import { PianoPage } from './pages/piano';
import { ScrollImageAnimationPage } from './pages/scroll-image-animation';

type RouterProps = PropsWithChildren;

export const Router: FC<RouterProps> = ({ children }) =>
  <BrowserRouter>
    {children}
    <Routes>
      <Route path="/" element={<MainPage />}></Route>
      <Route path="/piano" element={<PianoPage />}></Route>
      <Route path="/album" element={<AlbumPage />}></Route>
      <Route path="/worker-choice" element={<EmployeeChoicePage />}></Route>
      <Route path="/category-list" element={<CategoryListPage />}></Route>
      <Route path="/scroll-image-animation" element={<ScrollImageAnimationPage />}></Route>
      {/* <Route path="*" element={<NotFound />}></Route> */}
    </Routes>
  </BrowserRouter>;