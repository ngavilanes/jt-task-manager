import React from "react";

const EditItem = ({description, time}) => {
  const changeDescription = (description) => {
    this.setState({ description: description });
  };

  const changeTime = (time) => {
    this.setState({ time: time });
  };

  const handleSubmit = (event) => {
    // alert('A name was submitted:' );
    event.preventDefault();
    this.props.addTask(this.state);
  };
  return (
    <div className="container">
      <h3> Please Enter Changes</h3>
      <div className="add-form">
        <form onSubmit={handleSubmit}>
          <div className="form-control">
            <h3>Description</h3>
            <input
              type="text"
              value={description}
              onChange={(e) => changeDescription(e.target.value)}
              placeholder="task description"
            ></input>
          </div>
          <div className="form-control">
            <h3>Time</h3>
            <input
              type="text"
              value={time}
              onChange={(e) => changeTime(e.target.value)}
            ></input>
          </div>
          <input type="submit" className="btn btn-block" value="Submit"></input>
        </form>
      </div>
    </div>
  );
};

export default EditItem;
