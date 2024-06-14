import CalculeBMI from "./components/CalculeBMI"
import HideComponent from "./components/ClassComponent"
import Products from "./components/Products"

import GetGithubProfile from "./components/GetGithubProfile";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import RootLayout from "./layout/RootLayout.jsx";
import LivresList from "./components/LivresList.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route path="github-api" element={<GetGithubProfile />} />
      <Route path="products" element={<Products />} />
      <Route path="hide-component" element={<HideComponent />} />
      <Route path="calcule-bmi" element={<CalculeBMI />} />
      <Route path="livresList" element={<LivresList />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
