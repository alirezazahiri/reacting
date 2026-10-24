import { Component, inject } from '@angular/core';
import { CounterService } from '@reacting/app';

@Component({
  selector: 'app-ng-counter',
  template: `
    <section class="counter" aria-labelledby="ng-counter-title">
      <h2 id="ng-counter-title">Angular counter</h2>
      <p>
        Count: <span class="count">{{ counter.count() }}</span>
      </p>
      <div class="actions">
        <button type="button" (click)="counter.increment()">Increment (angular)</button>
        <button type="button" (click)="counter.decrement()">Decrement (angular)</button>
      </div>
    </section>
  `,
})
export class NgCounter {
  protected readonly counter = inject(CounterService);
}
