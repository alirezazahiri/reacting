import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router';
import { createReactingApplication } from './reacting/angular';
import { InjectorProvider } from '@reacting/react';
import { router } from './react/routes';

const rootElement = document.querySelector('#root');

if (!rootElement) {
  throw new Error('Missing #root');
}

const appRef = await createReactingApplication();

createRoot(rootElement).render(
  <InjectorProvider appRef={appRef}>
    <RouterProvider router={router} />
  </InjectorProvider>,
);
