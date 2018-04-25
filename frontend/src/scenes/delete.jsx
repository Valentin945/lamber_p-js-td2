import React from 'react';
import '../CSS/add.css'
import CustomButton from '../common/button.jsx'

class Delete extends React.Component{
  constructor(props)
  {
    super(props)
    this.state = {
      id: ''
    }
    this.submitFunction = this.submitFunction.bind(this)
  }

  submitFunction()
  {
    const {id} = this.state
    fetch('http://localhost:4242/api/pictures' + '/' + id, {
      method: 'delete'
    })
    .then(response => 
      response.json().then(json => {
        return json
      })
    )
  }

  render()
  {
    return (
      <div className="myform">
        <div className="form-elmt">
          <label> ID</label>
          <div className="inputStyle">
            <input type="text" value={this.state.id} onChange={(e) => this.setState({id: e.target.value})} /> 
          </div>
        </div>
        <div className="form-elmt" style={{display: 'block'}}>
          <CustomButton text="Delete" func={this.submitFunction}/>
        </div>
      </div>
    )
  }
}

export default Delete;