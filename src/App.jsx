import React, { Component } from "react";
import List from "./components/List";
import Additem from "./components/AddItem";
import { Route, BrowserRouter as Router } from "react-router-dom";
import EditItem from "./components/EditItem";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tasks: [
        { description: "take out the trash", time: "tomorrow" },
        { description: "walk the dog", time: "today at 4pm" },
        { description: "wash the dishes", time: "today at 8am" },
      ],
      showAddTask: false,
    };
  }

  deleteTask = (index) => {
    console.log("we're in deleteTASK");
    const newState = this.state;
    newState.tasks.splice(index, 1);
    this.setState(newState);
  };

  editTask = (index, description, time) => {
    const newState = this.state;
    const newItem = { description, time };
    newState.tasks.splice(index, 1, newItem);
    this.setState(newState);
  };

  addTask = ({ description, time }) => {
    const newState = this.state;
    const newItem = { description, time };
    newState.tasks.splice(0, 0, newItem);
    console.log(newState);
    this.setState(newState);
  };

  toggleAddTask = (showAddTask) => {
    this.setState({ showAddTask: !showAddTask });
  };

  render() {
    const { tasks, showAddTask } = this.state;
    return (
      <Router>
        <Route
          path="/"
          exact
          render={() => (
            <>
              <div className="container">
                <div className="header">
                  <h1>Nick's Task Tracker</h1>
                  <button
                    className="btn"
                    style={{ backgroundColor: showAddTask ? "red" : "green" }}
                    onClick={() => this.toggleAddTask(showAddTask)}
                  >
                    {showAddTask ? "Done Adding" : "Add a task"}
                  </button>
                </div>
                {showAddTask ? <Additem addTask={this.addTask}></Additem> : " "}
                <List tasks={tasks} deleteTask={this.deleteTask} editTask = {this.editTask}></List>
              </div>
            </>
          )}
        />
        <Route path = '/edit' component = {EditItem}></Route>
      </Router>
    );
  }
}
