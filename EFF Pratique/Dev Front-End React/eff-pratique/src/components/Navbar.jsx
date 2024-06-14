import { Link, Outlet } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <nav>
        <ul style={{ display: "flex", gap: "10px", listStyle: "none" }}>
          <li>
            <Link to="/">الرئيسية</Link>
          </li>
          <li>
            <Link to="/githubapi">githubapi</Link>
          </li>
          <li>
            <Link to="/products">products</Link>
          </li>
          <li>
            <Link to="/classcomponent">classcomponent</Link>
          </li>
          <li>
            <Link to="/calculebmi">calculebmi</Link>
          </li>
          <li>
            <Link to="/livres">Livres</Link>
          </li>
          <li>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
}
