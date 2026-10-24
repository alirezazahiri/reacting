import { Link } from 'react-router';

export const NotFound = () => {
  return (
    <section className="page" aria-labelledby="not-found-title">
      <h1 id="not-found-title">Page not found</h1>
      <p>That route is not part of this shell.</p>
      <Link to="/">Go home</Link>
    </section>
  );
}
