// Code CoordinatesButton Component Here
import React from "react"

class CoordinatesButton extends React.Component{
  constructor(props){
    super(props)
  }

  render(){
    return (
      <button onClick={event => this.props.onReceiveCoordinates([event.clientX, event.clientY])} >Coordinates</button>
    )
  }
}

export default CoordinatesButton
