import React, { Component } from "react";
import "./App.css";
import { updateUser, addUser } from "../actions/userActions";
import { connect } from "react-redux";

class App extends Component {
  handleUpdateUser = () => {
    this.props.updateuserprop({ userid: 2, userName: "khuidad" });
  };
  handleAddUser = () => {
    this.props.adduserprop({ userid: 3, userName: "ADNANA" });
  };
  render() {
    console.log("props = ", this.props);
    return (
      <div className="App">
        <div onClick={this.handleUpdateUser}>update user</div>
        <div onClick={this.handleAddUser}>add user</div>
        <p>update for ci</p>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  users: state.users,
  products: state.products
});

const mapActionToProps = {
  updateuserprop: updateUser,
  adduserprop: addUser
};

export default connect(
  mapStateToProps,
  mapActionToProps
)(App);
