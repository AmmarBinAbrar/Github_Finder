import React, { Component } from "react";
import "./Search.css";
class Search extends Component {
  state = {
    text: "",
  };
  textHandler = (e) => {
    this.setState({ text: e.target.value });
  };

  onSubmitHandler = (e) => {
    e.preventDefault();
    console.log(this.state.text);
    this.props.onSearchText(this.state.text);
    this.setState({ text: "" });
  };
  render() {
    return (
      <form className="form" onSubmit={this.onSubmitHandler}>
        <input
          type="text"
          name="text"
          placeholder="Search Users"
          value={this.state.text}
          onChange={this.textHandler}
        ></input>
        <input type="submit" value="Search"></input>
      </form>
    );
  }
}

export default Search;
