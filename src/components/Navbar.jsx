import React from "react"

class Navbar extends React.Component {

  onLogoClick = () => {
    this.props.onSectionChange("posts")
  }

  onProfileClick = () => {
    this.props.onSectionChange("pofile")
  }

  render(){
    return (
    <nav className="navbar navbar-light bg-light">
        <div className="container-fluid">
          <span 
            className="navbar-brand mb-0 h1 clickable"
            onClick={this.onLogoClick}
          >
            <i className="bi bi-lightning-charge-fill mx-1"></i>
            three pics
          </span>
          <i 
            className="bi bi-person-circle fs-3 clickable"
            onClick={this.onProfileClick}
          ></i>
        </div>
      </nav>
    )
  }
}

export default Navbar