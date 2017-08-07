// Code DelayedButton Component Here
import React from "react"

class DelayedButton extends React.Component{
  constructor(props){
    super(props)
  }

  handleClick = (event) => {
    // (event) => setTimeout(this.props.onDelayedClick(), this.props.delay)
    event.persist()
    let arr = [event.clientX, event.clientY]
    setTimeout(()=>{
      this.props.onDelayedClick(event)}, this.props.delay)
  }

  render(){
    return (
      <button onClick={this.handleClick}>Delay</button>
    )
  }
}

export default DelayedButton
