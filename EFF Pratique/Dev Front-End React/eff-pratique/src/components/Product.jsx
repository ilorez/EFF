/* eslint-disable react/prop-types */
export default function Product(props) {
  return (
    <div
      style={{
        border: "1px solid black",
        display: "flex",
        gap: "10px",
        padding: "10px",
        background:"green"
      }}
    >
      <p>{props.title}</p>
      <p>{props.price}</p>
    </div>
  );
}
