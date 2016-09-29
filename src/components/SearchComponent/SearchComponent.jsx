import React, { Component } from 'react';


let sampleData
export default class SearchComponent extends Component {

   constructor(props){
     super(props);
   }

   renderRow(){
   
   let searchFields = [{name:"quotationStart"},{name:"quotationEnd"},{name:"alternateQuotationStart"},{name:"alternateQuotationEnd"}];
    let item =[];
    item.push(<option key="0" value="-select-" >--Select Property--</option>);
    searchFields.map((row)=>{
      item.push(<option key={row.name} value={row.name} >{row.name}</option>);
    });

    return item;
   }


  render() {
    return (
      <div  style={{margin:'auto',textAlign:'center'}}>
      Select Property :  <select  onChange={(e) => this.props.onChange(e)} >
          {this.renderRow()}
        </select>
      </div>
    );
  }
}
