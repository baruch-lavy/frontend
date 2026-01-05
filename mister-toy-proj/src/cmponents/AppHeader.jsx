import { NavLink } from "react-router-dom";

export function AppHeader() {
  return (
    <section className="app-header">
      <div className="flex justify-between">
        <nav>
            <NavLink to={'/toy'}>Toys</NavLink>
        </nav>
      </div>
    </section>
  );
}
