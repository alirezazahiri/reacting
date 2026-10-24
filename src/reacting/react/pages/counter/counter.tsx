import { CounterService } from '@reacting/app';
import { useNgInject, useNgSignal } from '@reacting/react';

export const Counter = () => {
  const counter = useNgInject(CounterService);
  const count = useNgSignal(counter.count);

  return (
    <section className="counter" aria-labelledby="react-counter-title">
      <h2 id="react-counter-title">React counter</h2>
      <p>
        Count: <span className="count">{count}</span>
      </p>
      <div className="actions">
        <button type="button" onClick={() => counter.increment()}>
          Increment (react)
        </button>
        <button type="button" onClick={() => counter.decrement()}>
          Decrement (react)
        </button>
      </div>
    </section>
  );
};
