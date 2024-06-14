/* eslint-disable react/prop-types */
export default function Product(props) {
  return (
    <div style={{ border: "1px solid black",margin:"5px",paddingLeft:"6px" }}>
      <h3>{props.title}</h3>
      <p>{props.price}</p>
    </div>
  );
}
