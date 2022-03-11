import React from "react";
import {Link } from 'react-router-dom';

export const List = ({ tasks, deleteTask,editTask }) => {
  return (
    <div>
      {tasks.map((task, index) => (
        <div className= 'task'  key = {index}>
            <div className = 'header'>
          <h3>{task.description}</h3>
          <h3>{task.time}</h3>
          </div>
          <button className="btn" onClick = {() => deleteTask(index)}>delete</button>
          <Link to ={{ pathname:'/edit', state:{description:task.description, time: task.time, index: index} }}><button className="btn">edit</button></Link>
 
        </div>
      ))}
    </div>
  );
};

export default List;
