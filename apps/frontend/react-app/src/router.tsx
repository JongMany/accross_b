import { createBrowserRouter } from 'react-router-dom';
import AppIndexPage from './app/page';

const router = createBrowserRouter([
  {
    path: '/',
    element: <AppIndexPage />,
  },
]);

export default router;
