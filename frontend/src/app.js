import React from 'react'
import { hot } from 'react-hot-loader'
import NavBar from './common/navbar.jsx'
import Home from './scenes/home.jsx'
import Add from './scenes/add.jsx'
import Delete from './scenes/delete.jsx'

class App extends React.Component
{
  constructor(props)
  {
    super(props)
    this.state ={
      currentPage: 'Home'
    }
    this.changePage = this.changePage.bind(this)
    this.showPage = this.showPage.bind(this)
  }

  changePage(page)
  {
    this.setState((prevState) =>{
      prevState.currentPage = page
      return prevState
    })
  }

  showPage()
  {
    const {currentPage} = this.state
    switch (currentPage)
    {
      case 'Home':
        return <Home />
        break
      case 'Add':
        return <Add />
        break
      case 'Delete':
        return <Delete />
        break;
      default:
        return <Home />
    }
  }

  render()
  {
    const displayPage = this.showPage()
    return (
      <div>
        <NavBar changePage={this.changePage}/>
        <div style={{marginTop: 30}}>
          {displayPage}
        </div>
      </div>
    )
  }
}

export default hot(module)(App)