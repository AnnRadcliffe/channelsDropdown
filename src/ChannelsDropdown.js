import React from 'react';
// import ChannelsDropdown from "./ChannelsDropdown";
import ChannelsData from "./ChannelsData";

// https://reactjs.org/blog/2018/03/29/react-v-16-3.html#component-lifecycle-changes

class ChannelsDropdown extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      channels: ChannelsData
    }
}
handleChange(event) {
  this.setState({value: event.target.value});
}

  render() {
    //
    const channelSelection = this.state.channels.map((item) =>  <option placeholder='Please Choose One' key={item.id}>{item.value}</option>)
    if(this.state.value == 'Other')   { 
        ('#hiddenDiv').show();    
      }   
    else {   
          ('#hiddenDiv').hide();      
        }
      


    return (
      <>
        <h5> 
        How did you hear about us?
        </h5>
       
        <select> 
          {channelSelection}
        </select>
        <div id='hiddenDiv'> 
          <input style="display: none;"/>
        </div>
      </>
      
    );

  }
}

export default ChannelsDropdown;
