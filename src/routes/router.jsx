import { createBrowserRouter } from 'react-router-dom';
import RootLayout from '../pages/RootLayout';
import Home from '../pages/Home';
import Sobre from '../pages/Sobre';
import NotFound from '../pages/NotFound';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'sobre', element: <Sobre /> },
      { path: '*', element: <NotFound /> },
    ],
  },
]);

export default router;
