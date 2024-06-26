import React from "react";
import List from "./List";

export default class UserList extends React.Component {
  state = { lists: [], loading: true };

  async componentDidMount() {
    const config = {
      headers: {
        "content-type": "aplication/json",
      },
    };
    config.headers["Authorization"] = "Token " + localStorage.getItem("token");

    var url = "http://127.0.0.1:8000/list/";
    const response = await fetch(url, config);
    const data = await response.json();
    this.setState({ lists: data, loading: false });
  }

  render() {
    const listApi = this.state.lists;
    return (
      <div>
        {listApi.map((list) => (
          <List key={list.id} listname={list.name} items={list.item_set} />
        ))}
      </div>
    );
  }
}
