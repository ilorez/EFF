import React, { useState } from "react";

class ShowMyName extends React.Component {
  constructor() {
    super();
    this.state = { show: false };
  }
  toggleName = () => {
    this.setState({show:!this.state.show})
  }

  componentDidMount = () => {
    console.log("component did mount")
  }

  componentDidUpdate = () => {
    console.log("component did update")
  }

  componentWillUnmount = () => {
    console.log("componenet will unmount")
  }
  render() {
    return (
      <div>
        <p>Hello my name is {
            this.state.show ? "zobair":"******"
            }</p>
        <button onClick={this.toggleName}>{
            this.state.show ? "Hide":"Show"
            }</button>
      </div>
    );
  }
}

function HideComponent(){
    const [hide,SetHide] = useState(true)
    return (
        <div>
            {
                !hide && (
                        <ShowMyName />
                    )
            }
            <br />
            <button onClick={()=>SetHide(!hide)}>{hide ? "show":"hide"} {" "}Component </button>
        </div>
    )
}

export default HideComponent
