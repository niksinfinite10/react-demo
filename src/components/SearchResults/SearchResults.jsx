import React, { Component } from 'react';

export default class SearchResults extends Component {

   constructor(props){
     super(props);
  }

   renderRow (){
     let item = [];
     
      item.push(<li key="1" >Results for {this.props.searchStr}: </li>);
       this.props.results.map((row)=> {
         item.push(<li key={row}>{row}</li>);
      });
   return item;
   };


  render() {
    return (
      <div className="search-container table">
        <ul className="horizontal-list">
          {this.renderRow()}
        </ul>
      </div>
    );
  }
}
