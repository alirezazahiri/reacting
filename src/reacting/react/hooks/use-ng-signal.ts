import { effect, runInInjectionContext, type Signal } from '@angular/core';
import { useCallback, useSyncExternalStore } from 'react';
import { useNgContext } from './use-ng-context';

export function useNgSignal<T>(source: Signal<T>): T {
  const { injector } = useNgContext();

  const subscribe = useCallback(
    (onStoreChange: () => void) => {
      const watcher = runInInjectionContext(injector, () =>
        effect(() => {
          source();
          onStoreChange();
        }),
      );

      return () => watcher.destroy();
    },
    [injector, source],
  );

  return useSyncExternalStore(subscribe, source, source);
}
