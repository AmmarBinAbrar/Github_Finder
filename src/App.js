import React from "react";
import Navbar from "./Components/Layout/Navbar";
import axios from "axios";
import "./App.css";
import User from "./Components/Users/User";
import Search from "./Components/Users/Search";

class App extends React.Component {
  state = {
    users: [],
    loading: false,
  };
  // async componentDidMount() {
  //   this.setState({ loading: true });
  //   const url = "https://api.github.com/users";
  //   const res = await axios.get(url);
  //   console.log(res.data);
  //   this.setState({ users: res.data, loading: false });
  // }
  searchTextHandler = async (text) => {
    this.setState({ loading: true });
    const url = `https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`;
    const res = await axios.get(url);
    console.log(res.data);
    this.setState({ users: res.data.items, loading: false });
    console.log(text);
  };
  render() {
    const loading = false;
    if (loading) {
      return "Loading";
    }
    return (
      <div>
        <Navbar title="Github Finder" />
        <div className="container">
          <Search onSearchText={this.searchTextHandler} />
          <User users={this.state.users} loading={this.state.loading} />
        </div>
      </div>
    );
  }
}

export default App;
