import MainLayout from './Layouts/MainLayout';
import LocationsPage from './Pages/LocationsPage';
import { JSX } from 'react';

export const router: {
  path: string;
  children: { path: string; index: boolean; element: JSX.Element }[];
  element: JSX.Element;
}[] = [
  {
    element: <MainLayout />,
    path: '/',
    children: [
      {
        index: true,
        path: 'locations',
        element: <LocationsPage />,
      },
    ],
  },
];
