import React from "react";

const AddTaskForm = (props) => {

  return (
    <div>
    <form onSubmit={props.submit}>

        <label>
            Task title:
            <input type="text" name="title" required onChange={(event) => props.change(event)}            />
        </label>
        <br />
        <label>
            Due date:
            <input type="date" name="deadline" required onChange={(event) => props.change(event)}  />
        </label>
        <br />
        <label>
            Details:
            <input type="text" name="description" onChange={(event) => props.change(event)}   />
        </label>
        <br />
        <label>
            Priority:
            <select name="priority" defaultValue="Low" onChange={(event) => props.change(event)} >
        <option value='Low'style={{backgroundColor: "green"}}>Low</option>
        <option value="Medium"style={{backgroundColor: "yellow"}}>Medium</option>
        <option value="High" style={{backgroundColor: "red"}}>High</option>
      </select>
        </label>
        <br />
        <input type="submit" value="Submit" />
        </form>
    </div>
  )
};

export default AddTaskForm;
