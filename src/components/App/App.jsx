import React, { Component } from 'react';
import { SearchComponent }  from '../SearchComponent';
import { SearchResults }  from '../SearchResults';


export default class App extends Component {

  constructor(props){
     super();
     this.state = {inputText:undefined ,results:[]};
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
       }},
       {
    "ar-MR": {
      "identity": {
        "version": {
          "_number": "$Revision: 12217 $",
          "_cldrVersion": "29"
        },
        "language": "ar",
        "territory": "MR"
      },
      "delimiters": {
        "quotationStart": "”",
        "quotationEnd": "“",
        "alternateQuotationStart": "’",
        "alternateQuotationEnd": "‘"
      }
    }
  }

     ]
   };

   this.setState({data:this.sampleData});

   }


  addInput(){
    console.log('add input');
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

  submit(e){
    console.log('asd');
    if(e.keyCode==13){
      //Enter key pressed
      let result = [];
      let searchValue = this.searchBar.value;
      this.sampleData.main.map((record)=>{
        for(let x in record){
          if(record[x].delimiters.hasOwnProperty(searchValue))
            result.push(x+' = '+record[x].delimiters[searchValue]);
        }
      });
      if(result.length==0){
        result.push('no data found');
      }
      this.setState({results:result});
    }
}

  render() {

    let results = this.state.results.length>0?<SearchResults results={this.state.results} />:null;
    return (
      <div className="container-main" style={{width:'50%',margin:'auto'}}>
      <h1 style={{textAlign:'center'}}>(Hit: Enter after Finish)</h1>
      <div  style={{margin:'auto',textAlign:'center'}}>
        <input name="inputBox" type="text"  onKeyDown={this.submit.bind(this)} ref={(ref) => this.searchBar = ref} />
        <input type="button" value="Add more" onClick={this.addInput.bind(this)} />
        {results}
      </div>
      </div>
    );
  }
}
