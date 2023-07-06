import React from "react";
import Navbar from "./Components/Layout/Navbar";
import axios from "axios";
import "./App.css";
import User from "./Components/Users/User";

class App extends React.Component {
  state = {
    users: [],
    loading: false,
  };
  async componentDidMount() {
    this.setState({ loading: true });

    const url = "https://api.github.com/users";
    const res = await axios.get(url);
    console.log(res.data);
    this.setState({ users: res.data, loading: false });
  }
  render() {
    const loading = false;
    if (loading) {
      return "Loading";
    }
    return (
      <div>
        <Navbar title="Github Finder" />
        <div className="container">
          <User users={this.state.users} loading={this.state.loading} />
        </div>
      </div>
    );
  }
}

export default App;
