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
