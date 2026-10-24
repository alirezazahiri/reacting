import { createContext, type ReactNode } from 'react';
import type { ApplicationRef, EnvironmentInjector } from '@angular/core';

export interface NgContextValue {
  appRef: ApplicationRef;
  injector: EnvironmentInjector;
}

export const NgContext = createContext<NgContextValue | null>(null);

export function InjectorProvider({
  appRef,
  children,
}: {
  appRef: ApplicationRef;
  children: ReactNode;
}) {
  const value: NgContextValue = {
    appRef,
    injector: appRef.injector,
  };

  return <NgContext.Provider value={value}>{children}</NgContext.Provider>;
}
