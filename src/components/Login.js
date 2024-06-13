import React from "react";
import UserList from "./UserList";

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: "", password: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
  }

  handleChange(event) {
    this.setState({ username: event.target.value });
  }

  handlePassword(event) {
    this.setState({ password: event.target.value });
  }

  handleSubmit(event) {
    var url = "http://127.0.0.1:8000/api-token-auth/";
    const requestOption = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: this.state.username,
        password: this.state.password,
      }),
    };
    fetch(url, requestOption)
      .then((response) => response.json())
      .then((data) => {
        localStorage.setItem("token", data.token);
        this.setState({ token: data.token });
      });

    event.preventDefault();
  }
  logout() {
    localStorage.removeItem("token");
    this.setState({ token: null });
  }
  render() {
    var token = localStorage.getItem("token");
    if (!token)
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input
              type="text"
              value={this.state.username}
              onChange={this.handleChange}
            />
            <input
              type="password"
              value={this.state.password}
              onChange={this.handlePassword}
            />
          </label>
          <input type="submit" value="Submit" />
        </form>
      );
    else
      return (
        <>
          <UserList />
          <button onClick={() => this.logout()}>Logout</button>
        </>
      );
  }
}
