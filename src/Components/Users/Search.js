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
    if (this.state.text === "") {
      this.props.onAlert("Please Enter a User Name", "light");
    } else {
      console.log(this.state.text);
      this.props.onSearchText(this.state.text);
      this.setState({ text: "" });
    }
  };
  render() {
    return (
      <>
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
        {this.props.showUsers && (
          <button onClick={this.props.onClearUsers}>Clear Users</button>
        )}
      </>
    );
  }
}

export default Search;
