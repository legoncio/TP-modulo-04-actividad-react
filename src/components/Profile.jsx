function Profile(props) {

    function onLogout(){
        props.onLogoutComplete()
    }
    return(
        <div className="container profile-container">
            <div className="centered-container">
                <img 
                    src={props.profile.avatar}
                    alt=""
                    className="card-img-top rounded-circle profile-pic"
                >
                </img>
            </div>
            <div className="container profile-desc-container">
                <h5 className="card-title py-3">{props.profile.username}</h5>
                <p className="card-text">{props.profile.bio}</p>
            </div>
            <div className="centered-container mt-4">
                <button 
                    type="button" 
                    className="btn btn-danger"
                    onClick={onLogout}
                >
                    Logout
                </button>
            </div>  
        </div>
    )
}

export default Profile