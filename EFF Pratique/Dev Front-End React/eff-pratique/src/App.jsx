import HideComponent from "./components/ClassComponent";
import Products from "./components/Products";
import CalculeBMI from "./components/CalculeBMI";
import GithubAPI from "./components/GithubAPI";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LivresList from "./components/LivresList";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route path="githubapi" element={<GithubAPI />} />
          <Route path="products" element={<Products />} />
          <Route path="classcomponent" element={<HideComponent />} />
          <Route path="calculebmi" element={<CalculeBMI />} />
          <Route path="livres" element={<LivresList />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
