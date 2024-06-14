import { useSelector } from "react-redux";
import Product from "./ProductLivre";

export default function LivresList() {
  const livres = useSelector((state) => state.livres);
  console.log(livres);
  return (
    <div>
      <h2>Livres</h2>
      {livres.map((l) => (
        <Product key={l.id} title={l.title} price={l.price} id={l.id} />
      ))}
    </div>
  );
}
