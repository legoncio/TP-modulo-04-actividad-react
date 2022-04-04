import Post from "./Post";

function PostList(props) {
    if (props.posts.length > 0){
        return (
            <div className="container-xl my-4">
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-3 g-4 mb-5">
                    {props.posts
                        .filter(post => 
                            post.text.toLowerCase().includes(props.searchCriteria.toLowerCase()) || post.author.username.toLowerCase().includes(props.searchCriteria.toLowerCase()))
                        .map(post => 
                        <Post 
                            key={post.id}
                            id={post.id}
                            user={post.author.username} 
                            description={post.text}
                            createdAt={post.createdAt} 
                            url={post.image} 
                            comments={post.comments.length} 
                            likes={post.likes}
                        />
                    )}
                </div>
            </div>
        )
    }else{
        return (
            <div className="container-xl my-4">
                <h1>No posts to show!</h1>
            </div>
        )
    }
}

export default PostList