import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component 
  { constructor(props)
    
    { 
      super(props)
    this.state = {time : new Date().toLocaleTimeString()}
    this.tick = this.tick.bind(this)
    setInterval(this.tick, 1000);
   }
   tick()
   { 
     //this changes the state on the browser window
     this.setState ({time:new Date().toLocaleTimeString()})
   } 
   
render () {
    return <div>
      <h1>Hello, world!</h1> 
      <h2> It is {this.state.time} now </h2>
     {/* <h2>It is {new Date().toLocaleTimeString()}.</h2> */}
    </div>

}   
}

ReactDOM.render(<App/>, document.getElementById('root'));




