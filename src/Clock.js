import React, {Component} from 'react';
class Clock extends React.Component {
    constructor(props){
        super(props);
        this.state = {date: new Date()};
    }
    componentDidMount () {
        this.timerID = setInterval (
            () => this.tick(),
            1000
        );
    }
    componentWillUnmount() {
        clearInterval(this.timerID);
    }
    tick() {
        this.setState({
            date: new Date()
        });
    }
    render() {
        const colors = ["orange", "red", "blue"];
        const index= Math.floor(Math.random()*colors.length);
        const color=colors[index];
        return (
            <div>
                <h1>My Second React Lab</h1>
                <h2>The time is <span className={color}>{this.state.date.toLocaleTimeString ()}</span>.</h2>
            </div>
        );
    }
}
export default Clock;