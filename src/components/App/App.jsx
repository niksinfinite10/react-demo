import React, { Component } from 'react';


let sampleData
export default class App extends Component {

   constructor(props){
     super();
     this.state = {inputText:undefined ,results:'thi si result'};
     this.sampleData=undefined;

   }

   componentDidMount(){
     this.sampleData = {
     "main": [
       {
         "de": {
         "identity": {
           "version": {
             "_number": "$Revision: 12293 $",
             "_cldrVersion": "29"
           },
           "language": "de"
         },
         "delimiters": {
           "quotationStart": "„",
           "quotationEnd": "“",
           "alternateQuotationStart": "‚",
           "alternateQuotationEnd": "‘"
         }
       }
     },
       {"fr": {
        "identity": {
          "version": {
            "_number": "$Revision: 12379 $",
            "_cldrVersion": "29"
          },
          "language": "fr"
        },
        "delimiters": {
          "quotationStart": "«",
          "quotationEnd": "»",
          "alternateQuotationStart": "«",
          "alternateQuotationEnd": "»"
        }
      }},
      {"it": {
         "identity": {
           "version": {
             "_number": "$Revision: 12293 $",
             "_cldrVersion": "29"
           },
           "language": "it"
         },
         "delimiters": {
           "quotationStart": "«",
           "quotationEnd": "»",
           "alternateQuotationStart": "“",
           "alternateQuotationEnd": "”"
         }
       }}

     ]
   };

   this.setState({data:this.sampleData});

   }


  checkData(){
    let searchValue = this.searchBar.value;

    console.log('sample data ',this.sampleData);
    let result = "";
    this.sampleData.main.map((record)=>{

      for(let x in record){
        if(record[x].delimiters.hasOwnProperty(searchValue))
          result += x+'='+record[x].delimiters[searchValue]+",";
        console.log(result);
      }

    });

  }

  addInput(){


  }

  shouldComponentUpdate(newProps, newState) {
      return this.state !== newState;

    }

  renderOptions(){
      let items = [];
    if(this.state.data){
      this.state.data.main.map((record)=>{
        for(let x in record){
          items.push(<option key={x}> {record[x].delimiters} </option>);
        }

      });
    }
    else {
      items.push(<option key="1" >no data found</option>);
    }
    return items;
  }

  componentWillUpdate(){
    this.renderOptions();
    console.log('componentWillUpdate');

  }


  render() {
    let results = this.state.results;
    return (
      <div>
      <h1>Property name is case sensitive</h1>
        <input name="inputBox" type="text"  ref={(ref) => this.searchBar = ref} onChange={ this.checkData.bind(this)} />
        <select>
          {
            // this.renderOptions()
          }
        </select>
          <input type="button" value="+" onClick={this.addInput.bind(this)} />
        <div>

        </div>
      </div>
    );
  }
}
