import React from 'react'

function input() {
  return (
    <div className="d-flex gap-1">
          <input
            className="form-control"
            placeholder="Insert a task here.."
          ></input>
          <button className="btn btn-primary">Add</button>
    </div>
  )
}

export default input