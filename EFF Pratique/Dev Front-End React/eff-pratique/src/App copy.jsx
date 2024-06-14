import HideComponent from "./components/ClassComponent";
import Products from "./components/Products"
import CalculeBMI from "./components/CalculeBMI";
import GithubAPI from "./components/GithubAPI";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import RootLayout from "./layout/RootLayout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route path="githubapi" element={<GithubAPI />} />
      <Route path="products" element={<Products />} />
      <Route path="classcomponent" element={<HideComponent />} />
      <Route path="calculebmi" element={<CalculeBMI />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
