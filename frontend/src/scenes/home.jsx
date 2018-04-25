import React from 'react';
import SinglePhoto from '../common/singlePhoto.jsx'
import CustomButton from '../common/button.jsx'

class Home extends React.Component
{
  constructor(props)
  {
    super(props)
    this.state = {
      data: []
    }
    this.getPhotos = this.getPhotos.bind(this)
    this.reload = this.reload.bind(this)
  }

  reload()
  {
    window.location.reload()
  }

  getPhotos()
  {
    const {data} = this.state
    const res = []
    let index = 0
    for (const x in data)
    {
      res.push(<SinglePhoto key={index} link={data[x].picture} />)
      index++
    }
    return res;
  }

  componentWillMount()
  {
    console.log("int")
    fetch('http://localhost:4242/api/pictures?amount=20')
      .then((response) => {
        response.json().then( (data) => {
          this.setState((prevState) => {
            prevState.data = data
            return prevState
          })
        })
      })
  }

  render()
  {
    const listPhoto = this.getPhotos();
    return (
      <div>
        <div style={{display: 'flex', justifyContent: 'center'}}>
          <CustomButton text='reload' func={this.reload} />
        </div>
        {listPhoto}
      </div>
    )
  }
}

export default Home;