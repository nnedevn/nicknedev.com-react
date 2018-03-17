import React, {Component} from 'react';

class Test extends Component{
  constructor(props){
    super();

  }

  handleClick = (e) => {
    alert();
  }

render(){
  return(
    <div>
      <button onClick={this.handleClick} >Click me!</button>
    </div>
  )
}

}

export default Test