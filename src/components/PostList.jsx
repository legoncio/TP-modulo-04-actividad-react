import Post from "./Post";

function CardGroup(props) {
    return (
        <div className="container-xl my-4">
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-3 g-4 mb-5">
                {props.posts
                    .filter(post => 
                        post.description.toLowerCase().includes(props.searchCriteria.toLowerCase()) || post.user.includes(props.searchCriteria.toLowerCase()))
                    .map(post => 
                    <Post 
                        key={post.id}
                        user={post.user} 
                        description={post.description}
                        createdAt={post.createdAt} 
                        url={post.url} 
                        comments={post.comments} 
                        likes={post.likes}
                    />
                )}
            </div>
        </div>
    )
}

export default CardGroup