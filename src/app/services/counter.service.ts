import { Service, signal } from '@angular/core';

@Service()
export class CounterService {
  private readonly countState = signal(0);
  readonly count = this.countState.asReadonly();

  increment(): void {
    this.countState.update((value) => value + 1);
  }

  decrement(): void {
    this.countState.update((value) => value - 1);
  }
}
