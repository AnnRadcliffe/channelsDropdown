import React from 'react';
import ChannelsData from "./ChannelsData";


class ChannelsDropdown extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      channels: ChannelsData,
      placeHolder:'Please Choose One',
      isHidden: true,
      otherField: ''
    }
}

handleChange = (event) => {
  this.setState({
    otherField: event.target.value, // set this.state.otherField to the value in the <option>
  }, this.showTextbox);
}

showTextbox() {
  //define the condition in which the textbox will appear on the DOM
  if(this.state.otherField === 'Other' ) {
    this.setState({
      isHidden: false
    });
    console.log(this.state.otherField);
    } else {
      this.setState({
        isHidden: true
      });
    }
}

  render() {

    const channelSelection = this.state.channels.map((item) =>  <option key={item.id}> {item.value} </option>)

    return (
      <>
        <h5>How did you hear about us?</h5>
        <select defaultValue='Please Choose One' value={this.state.value} onChange={this.handleChange}> 
          {channelSelection} 
        </select>
        <div>
          {!this.state.isHidden && <input type='text'/> }
        </div>
      </>
      
    );

  }
}

export default ChannelsDropdown;
