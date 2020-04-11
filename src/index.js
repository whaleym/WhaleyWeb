import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './App.css'

class Clock extends Component {

    constructor(props) {
        super(props);
        this.state = {
            time: new Date().toLocaleTimeString()
        }
    }

    render() {
        return (
            <div>
                <h1 className="redBg whiteText">你好</h1>
                <h2>现在是北京时间 {this.state.time}</h2>
            </div>
        )
    }

    tick() {
        console.log("tick");
        this.setState({
            time: new Date().toLocaleTimeString()
        })
    }

    componentDidMount() {
        console.log("Clock did mount!");
        this.interval = setInterval(this.tick.bind(this), 1000);
    }

    componentWillUnmount() { 
        console.log("Clock will unmount!");
        clearInterval(this.interval);
    }
}

ReactDOM.render(<Clock />, document.getElementById('root'));