import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useLocation } from "react-router-dom";

const EditItem = ({ editTask }) => {
  let location = useLocation();
  let history = useHistory();

  const [time, setTime] = useState(location.state.time);
  const [desc, setDescription] = useState(location.state.description);
  const changeDescription = (description) => {
    setDescription(description);
  };

  const changeTime = (time) => {
    setTime(time);
  };

  const handleSubmit = (event) => {
    console.log(location);
    event.preventDefault();
    const index = location.state.index;
    editTask(index, desc, time);
    history.push('/');
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
              value={desc}
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
