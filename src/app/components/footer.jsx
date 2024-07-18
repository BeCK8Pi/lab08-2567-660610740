import React from 'react'

function footer(what) {
  return (
    <div className="mt-3">
        <p className="text-secondary text-center">
          copyright © {what.year} {what.fullName} {what.studentId}
        </p>
    </div>
  )
}

export default footer