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
  let searchValue="";
    //console.log('event',typeof(e) === 'boolean');
    if(typeof(e) === 'boolean')
    {
      searchValue = this.searchBar.value;
      this.searchProp(searchValue);
    }
    else if(e.target.value && e.type =='change'){
      searchValue = e.target.value;
      console.log('log is ');
      this.searchProp(searchValue);
    }
    else if(e.keyCode==13 ){
      searchValue = this.searchBar.value;
      this.searchProp(searchValue);
    }
}

searchProp(str){
  let result = [];


  this.sampleData.main.map((record)=>{
    for(let x in record){
      if(record[x].delimiters.hasOwnProperty(str)){
        result.push(x+' = '+record[x].delimiters[str]);

      }

    }
  });
  if(result.length==0){
    result.push('no data found');
  }
  this.setState({results:result,inputText:str});
}


  render() {

    let results = this.state.results.length>0?<SearchResults results={this.state.results} searchStr={this.state.inputText}/>:null;
    return (
      <div className="container-main">
      <h1 className="heading-center">Search Property</h1>

      <div  className="centered-div">
        <input className="search-box" placeholder="Enter Property to serach" name="inputBox" type="text"  onKeyDown={this.submit.bind(this)} ref={(ref) => this.searchBar = ref} />
        <input className="btn" type="button" value="Search" onClick={this.submit.bind(this,true)} />
                <h4 className="heading-center">(Hint: Enter after Finish or click on search button)</h4>
        <h4>OR</h4>
        <SearchComponent onChange={this.submit.bind(this)} />



        {results}
      </div>
      </div>
    );
  }
}
