import { Component } from 'react';
import './App.css';
import TrickCard from './TrickCard';

// Get all existing tricks from the API on page load and display them on the DOM.

class App extends Component {
  constructor(){
    super()
    this.state={
      trickList: []
    }
  }

  render() {
    return (
      <div className="App">
        <h1>Sick Trick Wish List</h1>
        <div className='trick-container'>
        <TrickCard />
        <TrickCard />
        <TrickCard />

        </div>
      </div>
    )
  }

  getTricks = () => {
    fetch('http://localhost:3001/api/v1/tricks')
    .then(response => response.json())
    .then(data => {
      console.log("DATA: ", data)
      this.setState({trickList: data})
      return
    })
  }

  componentDidMount = () => {
    this.getTricks()
  }
}

export default App;