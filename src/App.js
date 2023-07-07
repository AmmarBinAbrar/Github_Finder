import React from "react";
import Navbar from "./Components/Layout/Navbar";
import axios from "axios";
import "./App.css";
import User from "./Components/Users/User";
import Search from "./Components/Users/Search";
import Alert from "./Components/Layout/Alert";

class App extends React.Component {
  state = {
    users: [],
    loading: false,
    alert: null,
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
  clearUsersHandler = () => {
    this.setState({ users: "" });
  };
  alertHandler = (msg, style) => {
    this.setState({ alert: { msg: msg, style: style } });
    setTimeout(() => {
      this.setState({ alert: null });
    }, 4000);
  };
  render() {
    // const loading = false;
    // if (loading) {
    //   return "Loading";
    // }
    return (
      <div>
        <Navbar title="Github Finder" />
        <div className="container">
          <Alert onAlert={this.state.alert} />
          <Search
            onSearchText={this.searchTextHandler}
            onClearUsers={this.clearUsersHandler}
            showUsers={this.state.users.length > 0 ? true : false}
            onAlert={this.alertHandler}
          />
          <User users={this.state.users} loading={this.state.loading} />
        </div>
      </div>
    );
  }
}

export default App;
