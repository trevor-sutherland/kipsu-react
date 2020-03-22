import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';



class MessageSelect extends Component {
  constructor(props) {
    super(props);
    this.state = {
      url: '/Message.json',
      messageData: [],
      data:[],
      cardData:[],
    };
  }
  
  componentDidMount() {

     axios.get(this.state.url)
      .then((response) => {
        console.log(response.data);
        this.setState({
          messageData: response.data
      })
        console.log(this.state.messageData);
      })

      .catch((error) =>console.log(error));

  }   

  renderItems() {
    return this.state.messageData.map((item) => (
    	<option data={this.data} onChange={this.props.onChange} key={item.id} value={item.title}>
    	{item.title}
    	</option>
      )); 
    }

  render() {
      return (
      <React.Fragment>
      {this.renderItems()}
      </React.Fragment>
      );


    
  }
}

export default MessageSelect;
