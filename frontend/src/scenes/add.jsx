import React from 'react';
import '../CSS/add.css'
import CustomButton from '../common/button.jsx'

class Add extends React.Component
{
  constructor(props)
  {
    super(props)
    this.state = {
      id: '',
      url: '',
      caption: '',
      latitude: '',
      longitude: '',
      tags: ''
    }
    this.submitFunction = this.submitFunction.bind(this)
  }

  submitFunction()
  {
    const {id, url, caption, latitude, longitude, tags} = this.state
    const resp = {
      id: id,
      picture: url,
      caption: caption,
      latitude: latitude,
      longitude: longitude,
      tags: tags
    }
    fetch('http://localhost:4242/api/pictures', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(resp),
    })
  }

  render()
  {
    return (
      <div className="myform">
        <div className="form-elmt">
          <label> ID*</label>
          <div className="inputStyle">
            <input type="text" value={this.state.id} onChange={(e) => this.setState({id: e.target.value})} /> 
          </div>
        </div>
        <div className="form-elmt">
          <label> Url*</label>
          <div className="inputStyle">
            <input type="text" value={this.state.url} onChange={(e) => this.setState({url: e.target.value})} /> 
          </div>
        </div>
        <div className="form-elmt">
          <label> caption</label>
          <div className="inputStyle">
            <input type="text" value={this.state.caption} onChange={(e) => this.setState({caption: e.target.value})} />
          </div>
        </div>
        <div className="form-elmt">
          <label> latitude</label>
          <div className="inputStyle">
            <input type="text" value={this.state.latitude} onChange={(e) => this.setState({latitude: e.target.value})} /> 
          </div>
        </div>
        <div className="form-elmt">
          <label> longitude</label>
          <div className="inputStyle">
            <input type="text" value={this.state.longitude} onChange={(e) => this.setState({longitude: e.target.value})} />
          </div>
        </div>
        <div className="form-elmt">
          <label> Tags</label>
          <div className="inputStyle">
            <input type="text" value={this.state.tags} onChange={(e) => this.setState({tags: e.target.value})} />
          </div>
        </div>
        <div className="form-elmt" style={{display: 'block'}}>
          <CustomButton text="Submit" func={this.submitFunction}/>
        </div>
      </div>
    )
  }
}

export default Add;