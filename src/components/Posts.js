import React from "react"

const Posts = ({posts}) => {
    // console.log(posts)
    let allPosts = posts.map(post => (
        <div className="card" key="post._id">
            <div className="card-body">
                <h2 className="card-title">{post.title}</h2>
                <p className="card-text">{post.description}</p>
                <small>By: {post.author}</small>
            </div>
        </div>
    ))
    return(
        <div className="container">
            <h2 className="my-3">All Posts</h2>
            {allPosts}
        </div>
    )
}

export default Posts;