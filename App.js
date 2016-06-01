import React from 'react';
import ReactDOM from 'react-dom';
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      txt: ""
    }
    this.update = this.update.bind(this)
  }
  update(e) {
    this.setState({txt: e.target.value})
  }
  render() {
    let txt = this.props.txt;
    let cat = this.props.cat;
    return (
      <div class="class">
        <Widget txt={this.state.txt} update={this.update} />
        <Widget txt={this.state.txt} update={this.update} />
        <Widget txt={this.state.txt} update={this.update} />
        <Widget txt={this.state.txt} update={this.update} />
        <Widget txt={this.state.txt} update={this.update} />
      </div>
    );
  }
}

const Widget = (props) => {
  return (
    <div>
      <input type="text" onChange={props.update}></input>
      <h1>{props.txt}</h1>
    </div>
  )
}


export default App
