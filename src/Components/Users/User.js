import React, { Component } from "react";
import Useritem from "../Users/Useritem";
class User extends Component {
  state = {
    users: [
      {
        id: "1",
        login: "mojombo",
        html_url: "https://github.com/mojombo",
        avatar_url: "https://avatars.githubusercontent.com/u/1?v=4",
      },
      {
        id: "2",
        login: "defunkt",
        html_url: "https://github.com/defunkt",
        avatar_url: "https://avatars.githubusercontent.com/u/2?v=4",
      },
      {
        id: "3",
        login: "pjhyett",
        html_url: "https://github.com/pjhyett",
        avatar_url: "https://avatars.githubusercontent.com/u/3?v=4",
      },
    ],
  };
  render() {
    return (
      <div style={userStyle}>
        {this.props.users.map((user) => {
          return <Useritem key={user.id} users={user} />;
        })}
      </div>
    );
  }
}
const userStyle = {
  display: "grid",
  gridTempleteColumn: "repeat(auto-fit, minmax(300px 1fr))",
  gridGap: "1rem",
};
export default User;
