import { Link } from 'react-router';

export const Home = () => {
  return (
    <section className="page" aria-labelledby="home-title">
      <h1 id="home-title">React shell, Angular islands</h1>
      <p>Both counters read the same Angular service.</p>
      <div className="actions">
        <Link className="text-link" to="/angular">
          Angular counter
        </Link>
        <Link className="text-link" to="/react">
          React counter
        </Link>
      </div>
    </section>
  );
};
