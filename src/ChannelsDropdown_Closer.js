import React from 'react';
// import ChannelsDropdown from "./ChannelsDropdown";
import ChannelsData from "./ChannelsData";

// https://reactjs.org/blog/2018/03/29/react-v-16-3.html#component-lifecycle-changes

class ChannelsDropdown extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      channels: ChannelsData,
      otherField: ''
    }
}

handleChange(event) {
  this.setState({otherField: event.target.value});
   //  //define a variable for the textarea
   let otherField;
    
   //define the condition in which the element will appear on the DOM
   if(this.state.otherField === 'Other' ) {
   
     console.log('condition met');
   }
}

  render() {

    const channelSelection = this.state.channels.map((item) =>  <option key={item.id}>{item.value}</option>)

    return (
      <>
        <h5>How did you hear about us?</h5>
       
        <select value={this.state.value} onChange={this.handleChange.value} placeholder='Please Choose One'> 
          {channelSelection}
        </select>
        <div>
          <input type='text'
            onChange={this.handleChange}
          />
        </div>

      </>
      
    );

  }
}

export default ChannelsDropdown;
