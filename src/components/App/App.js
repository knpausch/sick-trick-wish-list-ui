import { Component } from 'react';
import './App.css';
import Tricks from './Tricks'
import Form from './Form'

// Create a controlled Form component to create a trick 
// (look into the API documentation to see what pieces of information are expected,
// and what datatypes it wants each piece to be). As a user types into the input fields, 
// the form component's state should change. When the user clicks the SEND IT button, 
// the application should update the App's state. The new trick should display with 
// all of the existing tricks.

class App extends Component {
  constructor() {
    super()
    this.state = {
      trickList: []
    }
  }

  getTricks = () => {
    fetch('http://localhost:3001/api/v1/tricks')
      .then(response => response.json())
      .then(data => {
        console.log("DATA: ", data)
        this.setState({ trickList: data })
        return
      })
  }

  componentDidMount = () => {
    this.getTricks()
  }

  addTrick = (newTrick) => {
    this.setState({ trickList: [...this.state.trickList, newTrick] })
  }

  render() {
    return (
      <div className="App">
        <h1>Sick Trick Wish List</h1>
        <Form addTrick={this.addTrick}/>
        <Tricks trickList={this.state.trickList} />
      </div>
    )
  }
}

export default App;