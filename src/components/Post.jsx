import React from "react"

class Card extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            likes: this.props.likes
        }
    }

    handleLike = () => {
        this.setState((state) => ({
            likes: state.likes + 1
        }))
    }

    render() {
        return (
            <div className="col">
                <div className="card h-100">
                    <img src={this.props.url} className="card-img-top" alt=""></img>
                    <div className="card-body">
                        <div className="card-updated-likes clickable">
                            <p className="card-text"><small className="text-muted">{this.props.createdAt}</small></p>
                            <div 
                                className="card-likes"
                                onClick={this.handleLike}
                            >
                                <i className="bi bi-heart-fill px-1"></i><p className="card-text">{this.state.likes}</p>
                            </div>
                        </div>
                        <h5 className="card-title">{this.props.user}</h5>
                        <p className="card-text">{this.props.description}</p>
                        <div className="card-comments">
                            <p className="card-text"><small className="text-muted"><i className="bi bi-chat-right"></i> Comments ({this.props.comments})</small></p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Card