import { createComponent, type ComponentRef, type Type } from '@angular/core';
import { useEffect, useRef } from 'react';
import { useNgContext } from '../../hooks/use-ng-context';

function applyInputs(
  componentRef: ComponentRef<unknown>,
  inputs: Record<string, unknown> | undefined,
): void {
  if (!inputs) {
    return;
  }

  for (const [key, value] of Object.entries(inputs)) {
    componentRef.setInput(key, value);
  }
}

export function AngularHost<T>({
  component,
  inputs,
}: {
  component: Type<T>;
  inputs?: Record<string, unknown>;
}) {
  const { appRef, injector } = useNgContext();
  const containerRef = useRef<HTMLDivElement>(null);
  const componentRef = useRef<ComponentRef<T> | null>(null);

  useEffect(() => {
    const container = containerRef.current;

    if (!container) {
      return;
    }

    const host = document.createElement('div');
    host.setAttribute('aria-host', 'angular-host');
    container.replaceChildren(host);

    const ref = createComponent(component, {
      environmentInjector: injector,
      hostElement: host,
    });
    
    componentRef.current = ref;
    applyInputs(ref, inputs);
    appRef.attachView(ref.hostView);

    return () => {
      appRef.detachView(ref.hostView);
      componentRef.current = null;
      ref.destroy();
    };
  }, [appRef, component, injector]);

  useEffect(() => {
    const ref = componentRef.current;
    if (!ref) {
      return;
    }

    applyInputs(ref, inputs);
  }, [inputs]);

  return <div ref={containerRef} />;
}
