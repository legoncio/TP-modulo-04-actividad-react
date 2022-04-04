import { Link } from "react-router-dom"

function Navbar(props) {

  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container-fluid">
        <Link to='/' style={{ color: 'inherit', textDecoration: 'inherit'}}>
          <span 
            className="navbar-brand mb-0 h1 clickable"
          >
            <i className="bi bi-lightning-charge-fill mx-1"></i>
            three pics
          </span>
        </Link>
        <Link to='/profile' style={{ color: 'inherit', textDecoration: 'inherit'}}>
          <i 
            className="bi bi-person-circle fs-3 clickable"
          ></i>
        </Link>
      </div>
    </nav>
  )
}

export default Navbar