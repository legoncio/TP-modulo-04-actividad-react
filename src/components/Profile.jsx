function Profile(props) {
    return(
        <div className="container profile-container">
            <div className="profile-pic-container">
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
        </div>
    )
}

export default Profile