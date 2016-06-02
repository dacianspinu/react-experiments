
import React from 'react';
import ReactDOM from 'react-dom';
class App extends React.Component {
  constructor() {
    super();
    this.state = { data: [
      {id: 1, name:"Simon Bailey"},
      {id: 2, name:"Thomas Bailey"},
      {id: 3, name:"Will Bailey"},
      {id: 4, name:"Ben Bailey"},
      {id: 5, name:"Kent Bailey"},
      {id: 6, name:"Trevor Bailey"},
      {id: 7, name:"Aaron Bailey"},
      {id: 8, name:"Joel Bailey"},
      {id: 9, name:"Jafar Bailey"},
      {id: 10, name:"Tim Bailey"},
      {id: 11, name:"John Bailey"},
      {id: 12, name:"Joe Bailey"},
      {id: 13, name:"Tyler Bailey"},
      {id: 14, name:"Scott Bailey"},
      {id: 15, name:"Robert Bailey"},
      {id: 16, name:"Keith Bailey"},
      {id: 17, name:"Lukas Bailey"},
      {id: 18, name:"Brett Bailey"}
    ]}
  }

  render() {
    let rows = this.state.data.map(person => {
      return <PersonRow key={person.id} data={person} />
    })
    return (
      <table>
        <tbody>{rows}</tbody>
      </table>
    )
  }
}

const PersonRow = (props) => {
  return (
    <tr>
      <td>{props.data.id}</td>
      <td>{props.data.name}</td>
    </tr>
  )
}

export default App
