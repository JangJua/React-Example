import React from 'react';
import {connect} from "react-redux";
import {setIsSorted,searchName} from "../redux/actions";

class SearchPlayer extends React.Component{
  handleChange = (e) => {
    this.props.setIsSorted(e.target.checked);
  };
  handleSearch = (e) => {
    this.props.searchName(e.target.value);
  };
  render() {
    return (
      <div className={"search-box"}>
        <input type="text" placeholder="search name" onChange={this.handleSearch}></input>
        <label className="mt-3">
          <input type="checkbox" checked={this.props.isSorted} onChange={this.handleChange}></input>
          show good player and bad player
        </label>
      </div>
   )
  }
}

let mapStateToProps = (state) => ({
  isSorted: state.playerReducer.isSorted,
  keyword: state.playerReducer.keyword
})

let mapDispatchToProps = (dispatch) => ({
  setIsSorted: (isSorted) => dispatch(setIsSorted(isSorted)),
  searchName: (name) => dispatch(searchName(name))
})

export default  connect(mapStateToProps,mapDispatchToProps)(SearchPlayer);