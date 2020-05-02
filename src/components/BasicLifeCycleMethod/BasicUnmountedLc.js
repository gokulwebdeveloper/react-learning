import React from 'react';


class BasicUnmountedLc extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      date: new Date()
    };
  }
  tick() {   
    this.setState({
      date: new Date()
    });
  }
  componentDidMount() {
    this.timerID = setInterval(() => {
      this.tick();
    }, 1000);
  }
  componentWillUnmount() {
     clearInterval(this.timerID);
  }
  render() {
    return (
      <div>
       <div>It is {this.state.date.toLocaleTimeString()}.</div>
      </div>
    );
  }
}

export default BasicUnmountedLc;
