import React, { Component } from "react";

export default class addItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      description: "",
      time: "",
    };
  }

  changeDescription = (description) => {
    this.setState({ description: description });
  };

  changeTime = (time) => {
    this.setState({ time: time });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.addTask(this.state);
  };
  render() {
    const { description, time } = this.state;
    return (
      <div className="add-form">
        <form onSubmit={this.handleSubmit}>
          <div className="form-control">
            <h3>Description</h3>
            <input
              type="text"
              value={description}
              onChange={(e) => this.changeDescription(e.target.value)}
              placeholder="task description"
            ></input>
          </div>
          <div className="form-control">
            <h3>Time</h3>
            <input
              type="text"
              value={time}
              onChange={(e) => this.changeTime(e.target.value)}
            ></input>
          </div>
          <input type="submit" className="btn btn-block" value="Submit"></input>
        </form>
      </div>
    );
  }
}
