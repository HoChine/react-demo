import React, { Component } from 'react';
import './App.css';

class Test extends Component {
    add() {
        console.log(2);
    }
    
    
    render() {
        return (
            <div className="App">
                <button onClick={this.add}>+</button>
            </div>
        );
    }
}

export default Test;
