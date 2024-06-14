import React, { useState } from "react";
class Counter extends React.Component {
  constructor() {
    super();
    this.state = { count: 0 };
  }
  plus() {
    this.setState({ count: this.state.count + 1 });
  }
  mines() {
    this.setState({ count: this.state.count - 1 });
  }
  componentDidMount() {
    console.log("componet did mount ");
  }
  componentWillUnmount() {
    console.log("component will unmount");
  }
  componentDidUpdate() {
    console.log("component did update");
  }
  render() {
    return (
      <div>
        Count : {this.state.count}
        <button onClick={() => this.plus()}>Inc(+)</button>
        <button onClick={() => this.mines()}>Dec(-)</button>
      </div>
    );
  }
}

export default function HideComponent() {
  const [hide, setHide] = useState(false);
  return (
    <div>
      {hide === true ? <Counter /> : null}
      <button onClick={() => setHide(!hide)}>Hide ClassComponent</button>
    </div>
  );
}
