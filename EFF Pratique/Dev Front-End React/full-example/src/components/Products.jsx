import Product from "./Product"
export default function Products () {
    console.log(products)
    return (
        <div>
            <h1>Products</h1>
            <ul>
                {products.map(product => (
                    <Product key={product.id} title={product.name} price={product.price} />
                ))}
            </ul>
        </div>
    )
}

const products = [
    {
        id: 1,
        name: 'Product 1',
        price: 100
    },
    {
        id: 2,
        name: 'Product 2',
        price: 200
    },
    {
        id: 3,
        name: 'Product 3',
        price: 300
    }
] 