import { createBrowserRouter } from 'react-router-dom';
import MainLayout from './Layouts/MainLayout';
import LocationsPage from './Pages/LocationsPage';

export const router = createBrowserRouter([
  {
    element: <MainLayout />,
    path: '/',
    children: [
      {
        path: '/locations',
        element: <LocationsPage />,
      },
    ],
  },
]);
