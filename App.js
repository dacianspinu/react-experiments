import React from 'react';
import ReactDOM from 'react-dom';
class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    let txt = this.props.txt;
    let cat = this.props.cat;
    return (
      <div>
        <h1>{txt}</h1>
        <b>{cat}</b>
      </div>
    );
  }
}

App.propTypes = {
  txt: React.PropTypes.string,
  cat: React.PropTypes.number.isRequired
}

App.defaultProps = {
  txt: 'This is the default prop value',
  cat: 6
}


ReactDOM.render(
  <App cat={62} txt="This is some text value"/>,
  document.getElementById('app')
)
