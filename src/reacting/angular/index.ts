import { type ApplicationRef } from '@angular/core';
import { createApplication } from '@angular/platform-browser';

export function createReactingApplication(): Promise<ApplicationRef> {
  return createApplication();
}

export * from './components';
