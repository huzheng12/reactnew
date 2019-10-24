import React, { Component } from 'react';
import { connect } from 'react-redux'
import { numberfn } from '../reducers/action';
@connect(
  state => {
    return {
      number: state.data.number,
      arr: state.data.arr,
    }
  },
  dispatch => {
    return {
      numberFn: (a) => dispatch(numberfn(a)),
      arrFn: (a) => dispatch({ type: "arr", arr: a })
    }
  }
)
class Index extends Component {
  gaib = () => {
    this.props.numberFn(this.props.number * 2)
    sessionStorage.token = ""
  }
  gaibs = () => {
    this.props.arrFn(this.props.arr * 2)
    sessionStorage.token = "5555"
  }
  render() {
    const { number, arr } = this.props
    return sessionStorage.token ? <div>
      <h1 onClick={this.gaib}>aldskjflkjsdl</h1>
      {number}
    </div> : <div>
        <h1 onClick={this.gaibs}>按钮</h1>
        {arr}
      </div>
  }
}
export default Index;