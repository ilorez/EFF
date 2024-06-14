import { NavLink, Outlet } from "react-router-dom";

export default function RootLayout() {
  return (
    <div>
      <nav>
        <ul style={{ padding: "20px", display: "flex", gap: "10px" }}>
          <NavLink to="/github-api">Github APi</NavLink>
          <NavLink to="/products">Products</NavLink>
          <NavLink to="/hide-component">Hide-component</NavLink>
          <NavLink to="/calcule-bmi">Calcule-bmi</NavLink>
          <NavLink to="/livresList">LiversList</NavLink>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
}
