import Post from "./Post.jsx";
import NewPost from "./NewPost.jsx";
import classes from './PostsList.module.css'
import Modal from "./Modal.jsx";
import {useState} from "react";

function PostList({isPosting, onStopPosting}) {
    const [posts, setPosts] = useState([]);

    function addPostHandler(postData) {
        // setPosts([postData, ...posts])
        setPosts((existingPosts) => [postData, ...existingPosts])
    }

    return <>
        {isPosting && <Modal onClose={onStopPosting}>
            <NewPost
                onCancel={onStopPosting}
                onAddPost={addPostHandler}
            />
        </Modal>}
        {posts.length > 0 && (
            <ul className={classes.posts}>
                {posts.map((post, index) => (
                    <Post key={index} author={post.authorName} body={post.body}/>
                ))}
            </ul>)}

        {posts.length === 0 && (
            <div style={{textAlign: 'center', color: 'white' }}>
                <h2>There are no posts yet.</h2>
                <p>Start adding some!</p>
            </div>
        )}

    </>
}

export default PostList;