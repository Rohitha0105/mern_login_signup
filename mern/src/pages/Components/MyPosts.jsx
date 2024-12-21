import React from 'react'
import './Myposts.module.css'
function MyPosts() {
  return (
    <div>
      <div>
        <table>
            <thead>
            <tr>
                <th>Organisation</th>
                <th>Department</th>
                <th>Experience</th>
                <th>Designation</th>
                <th>No Of Openings</th>
                <th>Salary</th>
                <th>Options</th>
            </tr>
            </thead>
            <body>
                <tr>
                    <td colSpan="6" style={{ textAlign: "center"}}>
                        No Posts Found
                    </td>
                </tr>
            </body>
        </table>
      </div>
    </div>
  )
}

export default MyPosts
