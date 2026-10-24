import type { ProviderToken } from '@angular/core';
import { useNgContext } from './use-ng-context';

export function useNgInject<T>(token: ProviderToken<T>): T {
  const { injector } = useNgContext();
  return injector.get(token);
}
