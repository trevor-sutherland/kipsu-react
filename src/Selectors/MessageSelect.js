import React, { Component } from 'react';

//Renders message select dropdown

class MessageSelect extends Component {
 
  renderItems() {
    return this.props.messages.map((item) => (
    	<option key={item.id} value={item.title}>
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
