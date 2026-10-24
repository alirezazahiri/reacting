import { useContext } from 'react';
import { NgContext, type NgContextValue } from '../providers';

export function useNgContext(): NgContextValue {
  const value = useContext(NgContext);

  if (!value) {
    throw new Error('Angular hooks must be used inside InjectorProvider.');
  }

  return value;
}
