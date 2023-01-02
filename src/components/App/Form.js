import React from "react";
import { Component } from "react";
import './Form.css'

class Form extends Component {
    constructor() {
        super()
        this.state = {
            stance: '',
            name: '',
            obstacle: '',
            tutorial: ''
        }
    }

    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value })
    }

    submitTrick = event => {
        event.preventDefault()
        const newTrick = {
            ...this.state
        }
        this.props.addTrick(newTrick)
        this.clearInputs()
    }

    clearInputs = () => {
        this.setState({ stance: '', name: '', obstacle: '', tutorial: '' })
    }

    render() {
        return (
            <form>
                <select name="stance" id="trickStance" onChange={event => this.handleChange(event)}>
                    <option value="...">Choose your Stance</option>
                    <option value="regular">regular</option>
                    <option value="switch">switch</option>
                </select>
                <input
                    type='text'
                    placeholder='Name of Trick'
                    name='name'
                    id='name'
                    value={this.state.name}
                    onChange={event => this.handleChange(event)}
                />
                <select name="obstacle" id="trickObstacle" onChange={event => this.handleChange(event)}>
                    <option value="...">Choose your Obstacle</option>
                    <option value="flatground">flatground</option>
                    <option value="ledge">ledge</option>
                    <option value="rail">rail</option>
                    <option value="stairs">stairs</option>
                    <option value="pool">pool</option>
                </select>
                <input
                    type='text'
                    placeholder='Link to Tutorial'
                    name='tutorial'
                    id='tutorial'
                    value={this.state.tutorial}
                    onChange={event => this.handleChange(event)}
                />
                <button onClick={event => this.submitTrick(event)}>Send It!</button>
            </form>
        )
    }
}

export default Form