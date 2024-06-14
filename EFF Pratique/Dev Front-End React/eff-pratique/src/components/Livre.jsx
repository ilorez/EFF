import { useDispatch } from "react-redux";
import { remove_livre, update_livre } from "../store/store";

/* eslint-disable react/prop-types */
export default function Livre(props) {
  const dispatch = useDispatch()

  const handleDelete = () =>{
    dispatch(remove_livre(props.id))
  }
  const updateLivre = (e) => {
    e.preventDefault();
    const id = Number(e.target.id.value);
    const title = e.target.title.value;
    const price = e.target.price.value;
    dispatch(update_livre({ id: id, title: title, price: price }));
  };
  return (
    <div
      style={{
        border: "1px solid black",
        display: "flex",
        gap: "10px",
        padding: "10px",
      }}
    >
      <p>{props.title}</p>
      <p>{props.price}</p>
      <br />
      <button onClick={handleDelete}>delete</button>
      <dialog className={"dialog" + props.id}>
            <button
              onClick={() =>
                document.querySelector(".dialog" + props.id).close()
              }
              autoFocus
            >
              Close
            </button>
            <form onSubmit={(e) => updateLivre(e)}>
              <input
                type="text"
                name="id"
                hidden
                style={{ display: "none" }}
                defaultValue={props.id}
              />
              <div>
                <label>Title</label>
                <input name="title" type="text" defaultValue={props.title} />
              </div>
              <div>
                <label>Price</label>
                <input
                  name="price"
                  type="text"
                  defaultValue={props.price}
                />
              </div>
              <button>Submit</button>
            </form>
          </dialog>
          <button
            onClick={() =>
              document.querySelector(".dialog" + props.id).showModal()
            }
          >
            update livre
          </button>
    </div>
  );
}
