import { Component } from 'react';
import './App.css';
import Tricks from './Tricks'
import Form from './Form'

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