import { useState } from "react"

function Card(props) {

    const [likes, setLikes] = useState(props.likes)

    function handleLike() {
        setLikes((prev) => prev + 1)
    }

    return (
        <div className="col">
            <div className="card h-100">
                <img src={props.url} className="card-img-top" alt=""></img>
                <div className="card-body">
                    <div className="card-updated-likes clickable">
                        <p className="card-text"><small className="text-muted">{props.createdAt}</small></p>
                        <div 
                            className="card-likes"
                            onClick={handleLike}
                        >
                            <i className="bi bi-heart-fill px-1"></i><p className="card-text">{likes}</p>
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