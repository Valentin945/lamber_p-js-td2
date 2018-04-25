import React from 'react'
import '../CSS/navbar.css'

class NavBar extends React.Component
{
  constructor(props)
  {
    super(props)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(change)
  {
    this.props.changePage(change)
  }

  render()
  {
    return (
      <div className="navbar">
        <div>
          <span onClick={() => this.handleChange("Home")}>
             Home 
          </span>
        </div>
        <div>
          <span onClick={() => this.handleChange("Add")}>
            Add
          </span>
        </div>
        <div >
          <span onClick={() => this.handleChange("Delete")}>
            Delete
          </span>
        </div>
      </div>
    )
  }

}

export default NavBar;