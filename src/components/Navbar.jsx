function Navbar(props) {

  function onLogoClick() {
    props.onSectionChange("posts")
  }

  function onProfileClick() {
    props.onSectionChange("pofile")
  }

  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container-fluid">
        <span 
          className="navbar-brand mb-0 h1 clickable"
          onClick={onLogoClick}
        >
          <i className="bi bi-lightning-charge-fill mx-1"></i>
          three pics
        </span>
        <i 
          className="bi bi-person-circle fs-3 clickable"
          onClick={onProfileClick}
        ></i>
      </div>
    </nav>
  )
}

export default Navbar