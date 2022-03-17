function Card(props) {
    return (
        <div className="col">
            <div className="card h-100">
                <img src={props.url} className="card-img-top" alt="..."></img>
                <div className="card-body">
                    <div className="card-updated-likes">
                        <p className="card-text"><small className="text-muted">{props.updated} minutes ago</small></p>
                        <div className="card-likes">
                            <i className="bi bi-heart-fill px-1"></i><p className="card-text">{props.likes}</p>
                        </div>
                    </div>
                    <h5 className="card-title">{props.user}</h5>
                    <p className="card-text">{props.description}</p>
                    <div className="card-comments">
                        <p className="card-text"><small className="text-muted"><i className="bi bi-chat-right"></i> Comments ({props.comments})</small></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card