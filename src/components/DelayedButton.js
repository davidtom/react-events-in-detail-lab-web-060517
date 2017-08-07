// Code DelayedButton Component Here
import React from "react"

class DelayedButton extends React.Component{
  constructor(props){
    super(props)
  }

  handleClick = (event) => {
    event.persist()
    setTimeout(() => {this.props.onDelayedClick(event)}, this.props.delay)
  }

  render(){
    return (
      <button onClick={this.handleClick}>Delay</button>
    )
  }
}

export default DelayedButton
