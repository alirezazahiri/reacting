import { Link, NavLink, Outlet } from 'react-router';

export const Shell = () => {
  return (
    <div className="shell">
      <header className="topbar">
        <Link className="brand" to="/">
          Reacting
        </Link>
        <nav className="nav" aria-label="Pages">
          <NavLink to="/angular">Angular</NavLink>
          <NavLink to="/react">React</NavLink>
        </nav>
      </header>
      <main className="content">
        <Outlet />
      </main>
    </div>
  );
};
