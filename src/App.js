import React from 'react';
import BasicLifeCycle from './components/BasicLifeCycleMethod/BasicLifeCycle';
import BasicUpdateLc from './components/BasicLifeCycleMethod/BasicUpdateLc';
import BasicUnmountedLc from './components/BasicLifeCycleMethod/BasicUnmountedLc'; 
import LifeCycleMethod from './components/AdvanceLifeCycleMethod/LifeCycleMethod'; 
import './App.css';

class App extends React.Component{
    render(){
    return(
      <div>
       <LifeCycleMethod />
      </div>
    )
  }
}

export default App;
