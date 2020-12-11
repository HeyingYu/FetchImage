import React from 'react';

class ImageShow extends React.Component{
	constructor(props){
    super(props);
    this.state = {
      index: 0,
    };
    this.slideRight=this.slideRight.bind(this);
    this.slideLeft = this.slideLeft.bind(this);
  }

  slideRight(){
  	this.setState({
  		index: (this.state.index+1)%(this.props.images.length),
  	});
  }
  
  slideLeft(){
  	const nextIndex = this.state.index-1;
  	if(nextIndex < 0){
  		this.setState({
  			index: this.props.images.length-1,
  		});
  	}else{
  		this.setState({
  			index: nextIndex%(this.props.images.length),
  		});
  	}
  }
  render(){
  	const imageList = this.props.images.map(image => {
  		return <img key = {image.id} src = {image.thumbnailUrl} alt={image.title} />
  	});
  	
  	return(
  		<div>
  		  <div  style = {{ display: 'flex', justifyContent: 'center'}}> 
  		    <input type = "range" min = "0" max = "100" />
  		  </div>
  		  <div style = {{display: 'flex', justifyContent: 'center'}}>
  		    <button onClick = {this.slideLeft}>{"-"} </button>
  		      {imageList[this.state.index]}
  		    <button onClick = {this.slideRight}>{"+"} </button>
  		  </div>
  		</div>
  	);
  }
}
export default ImageShow;