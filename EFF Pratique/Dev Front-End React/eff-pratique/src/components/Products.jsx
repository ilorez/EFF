import Product from "./Product";

export default function Products() {
  return (
    <div>
      <h2>Products</h2>
      <div style={{display:"flex",gap:"10px",background:"blue"}}>
        {products.map((p,index) => (
          <Product key={index} title={p.title} price={p.price} />
        ))}
      </div>
    </div>
  );
}

const products = [
  {
    id: 1,
    title: "title 1",
    price: 5000,
  },
  {
    id: 2,
    title: "title 2",
    price: 4000,
  },
  {
    id: 3,
    title: "title 3",
    price: 7000,
  },
];
