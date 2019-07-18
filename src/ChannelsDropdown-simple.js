import React from 'react';
// import ChannelsDropdown from "./ChannelsDropdown";
import ChannelsData from "./ChannelsData";



class ChannelsDropdown extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      channels: ChannelsData
    }
}

  render() {
    //
    const channelSelection = this.state.channels.map((item) => <option key={item.id}>{item.value}</option>)

    return (
      <>
        <h5> 
        How did you hear about us?
        </h5>
       
        <select>
          {channelSelection}
        </select>
       
      </>
      
    );

  }
}

export default ChannelsDropdown;
