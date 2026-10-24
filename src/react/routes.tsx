import { createBrowserRouter } from 'react-router';
import { NgCounter } from '@reacting/angular';
import { AngularHost, Counter, Home, NotFound, Shell } from '@reacting/react';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Shell />,
    children: [
      { index: true, element: <Home /> },
      { path: 'angular', element: <AngularHost component={NgCounter} /> },
      {
        path: 'react',
        element: <Counter />,
      },
      { path: '*', element: <NotFound /> },
    ],
  },
]);
