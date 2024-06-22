import { useState } from "react";
import classes from './NewPost.module.css';

function NewPost({onAddPost, onAuthorChange, onCancel}) {
    const [enteredBody, setEnteredBody] = useState('');
    const [enteredAuthor, setEnteredAuthor] = useState('');

    function bodyChangeHandler(event) {
        setEnteredBody(event.target.value);
    }

    function authorChangeHandler(event) {
        setEnteredAuthor(event.target.value);
    }

    function submitHandler(event) {
        event.preventDefault();
        const postData = {
            body: enteredBody,
            authorName: enteredAuthor,
        };
        console.log(postData);
        onAddPost(postData);
        onCancel();
    }

    return (
        <form className={classes.form} onSubmit={submitHandler}>
            <p>
                <label htmlFor="body">Text</label>
                <textarea id="body" required rows={3} onChange={bodyChangeHandler}></textarea>
            </p>
            <p>
                <label htmlFor="name">Your Name</label>
                <input type="text" id="name" required onChange={authorChangeHandler}></input>
            </p>
            <p className={classes.actions}>
                <button onClick={onCancel} type="button">Cancel</button>
                <button type="submit">Submit</button>
            </p>
        </form>
    )
}

export default NewPost;