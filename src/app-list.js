import React from 'react';
import './App.css';
// import ChannelsDropdown from "./ChannelsDropdown";
import ChannelsData from "./ChannelsData";

// https://reactjs.org/blog/2018/03/29/react-v-16-3.html#component-lifecycle-changes

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      channels: ChannelsData
    }
  }


  render() {
    //
    const channelSelection = this.state.channels.map((item) =>  <li key={item.id}>{item.value}</li>)

    return (
      <>
      <div>
        <h5> 
        How did you hear about us?
        </h5>
       
          <ul>
            {channelSelection}
          </ul>
        </div>
      
      </>
    );
  }
}

export default App;
