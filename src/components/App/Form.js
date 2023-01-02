import React from "react";
import { Component } from "react";
import './Form.css'

// { stance: <String>, name: <String>, obstacle: <String>', tutorial: <String>}

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

    render() {
        return (
            <form>
                <select name="trickStance" id="trickStance">
                    <option value="...">Choose your Stance</option>
                    <option value="regular">regular</option>
                    <option value="switch">switch</option>
                </select>
                <input
                    type='text'
                    placeholder='Name of Trick'
                    name='trickName'
                    value={this.state.name}
                />
                <select name="trickObstacle" id="trickObstacle">
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
                    name='trickTutorial'
                    value={this.state.tutorial}
                />
                <button>Send It!</button>
            </form>
        )
    }
}

export default Form