import { useDispatch } from "react-redux";
import { remove_livre } from "../store/store";
/* eslint-disable react/prop-types */
export default function Product(props) {
  const dispatch = useDispatch()
  const handleDelete = () => {
    console.log(props.id);
    dispatch(remove_livre(props.id))
  };
  const handleUpdate = () => {
    console.log("update", props.id);
  };
  return (
    <div
      style={{ border: "1px solid black", margin: "5px", paddingLeft: "6px" }}
    >
      <h3>{props.title}</h3>
      <p>{props.price}</p>
      <br />
      <button onClick={handleDelete}>Delete</button>
      <button onClick={handleUpdate}>Update</button>
    </div>
  );
}
