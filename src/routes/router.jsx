import { createBrowserRouter } from 'react-router-dom';
import RootLayout from '../pages/RootLayout';
import Home from '../pages/Home';
import About from '../pages/About';
import NotFound from '../pages/NotFound';
import Contact from '../pages/Contact';
import Product from '../pages/Product';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'sobre', element: <About /> },
      { path: 'produtos', element: <Product /> },
      { path: 'contato', element: <Contact /> },
      { path: '*', element: <NotFound /> },
    ],
  },
]);

export default router;
