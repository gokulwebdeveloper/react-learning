import React from 'react';


class BasicLifeCycle extends React.Component{
  constructor(){
    super();
    this.state ={
      name:"Gokul"
    }
  }
  /*static getDerivedStateFromProps(props, state) {
    console.log("getDerivedStateFromProps");
    return {name: props.name };
  }*/
  componentDidMount(){
   setTimeout(() => {
      this.setState({name: "World"})
    }, 1000);
  }
  render(){
    return(
      <div>
        Hello {this.state.name}
      </div>
    )
  }
}

export default BasicLifeCycle;
