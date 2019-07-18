import React from 'react';
// import ChannelsDropdown from "./ChannelsDropdown";
import ChannelsData from "./ChannelsData";

// https://reactjs.org/blog/2018/03/29/react-v-16-3.html#component-lifecycle-changes

class ChannelsDropdown extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      channels: ChannelsData,
      isHidden: true,
      otherField: ''
    }
}
// toggleHidden () {
//   this.setState({
//     isHidden: !this.state.isHidden
//   })
// }

handleChange = (event) => {
  this.setState({
    otherField: event.target.value,
    isHidden: false
  }, () => console.log(this.state.otherField));
   //  //define a variable for the textarea
  //  let otherField;
    
  //  //define the condition in which the element will appear on the DOM
  //  if(this.state.otherField === 'Other' ) {
  //   // otherField = <p>{this.state.otherField}</p>
  //    console.log('condition met');
  //  }
}

showTextbox = () => {
  let otherText = 
}

  render() {

    const channelSelection = this.state.channels.map((item) =>  <option key={item.id}>{item.value}</option>)

    return (
      <>
        <h5>How did you hear about us?</h5>
       
        <select value={this.state.value} onChange={this.handleChange} placeholder='Please Choose One'> 
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
