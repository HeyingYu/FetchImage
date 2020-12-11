
import logo from './logo.svg';
import './App.css';
import React from 'react';
//import Carousel from 'react-elastic-carousel';
import ImageShow from './ImageShow';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      images: []
    };
  }
  
  componentDidMount(){
    fetch("https://jsonplaceholder.typicode.com/photos")
    .then(response => response.json())
    .then(
      (result)=>{
        this.setState({
          images: result
        });
      })
    console.log(this.state.images);
  }
  render(){
    return(
      <div >
        <ImageShow images={this.state.images}/>
      </div>
      );
    }
  }

export default App;
