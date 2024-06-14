import { useDispatch } from "react-redux";
import { add_livre } from "../store/store";

export default function AddLivre(){
    const dispatch = useDispatch()
    const handleSubmit = (e) => {
        e.preventDefault()
        const title = e.target.title.value;
        const price = parseFloat(e.target.price.value)
        const id = crypto.randomUUID()
        dispatch(add_livre({id:id,title:title,price:price}))
    }
    return (
        <form onSubmit={(e)=>handleSubmit(e)}>
            Title: <input type="text" name="title" />
            <br />
            price: <input type="number" name="price" />
            <br />
            <button type="submit">Add</button>
        </form>
    )
}