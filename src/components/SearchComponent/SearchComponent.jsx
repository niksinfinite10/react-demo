import React, { Component } from 'react';


let sampleData
export default class SearchComponent extends Component {

   constructor(props){
     super(props);
   }




  render() {

    return (
      <div  style={{margin:'auto',textAlign:'center'}}>
        <input name="inputBox" type="text" ref={(ref) => this.searchBar = ref} onKeyDown={this.props.onKeyDown.bind(this,this.searchBar)} />
        <input type="button" value="Add more"  />
        <div>

        </div>
      </div>
    );
  }
}
