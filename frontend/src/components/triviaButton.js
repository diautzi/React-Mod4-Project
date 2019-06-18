import React, { Component } from "react"
import { Button } from 'semantic-ui-react'


export default class TriviaButton extends Component {

  //Don't touch me, I work (somehow)
  renderColor = () => {
    if (this.props.answered) {
      if (this.props.clickedAnswer === this.props.answer){
        if (this.props.correct) {
          this.props.addPoint()
          return "green"
        } else {
          return "red"
        }
      }
    } else {
      return "grey"
    }
  }


  render() {
    return (
      <Button fluid color={this.renderColor()} basic size="huge" onClick={!this.props.answered ? event => this.props.handleClick(event) : null} >{this.props.decodeHTML(this.props.answer)}</Button>
    )
  }
}
