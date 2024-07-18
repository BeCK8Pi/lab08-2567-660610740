import React from 'react'

function todo(what) {
  return (
    <div className="d-flex p-3 gap-2 align-items-center border-bottom">
          <span>{what.todo}</span>
          <button className="btn btn-success">Done</button>
          <button className="btn btn-danger">Delete</button>
    </div>
  )
}

export default todo