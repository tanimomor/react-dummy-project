import {useState} from "react";
import classes from './NewPost.module.css';
import Modal from "../components/Modal.jsx";
import {NavLink, Form, redirect } from "react-router-dom";

function NewPost() {
    return (
        <Modal>
            <Form method='post' className={classes.form}>
                <p>
                    <label htmlFor="body">Text</label>
                    <textarea id="body" name="body" required rows={3}></textarea>
                </p>
                <p>
                    <label htmlFor="name">Your Name</label>
                    <input type="text" id="name" name="author" required></input>
                </p>
                <p className={classes.actions}>
                    <NavLink class="" to="..">Cancel</NavLink>
                    <button type="submit">Submit</button>
                </p>
            </Form>
        </Modal>
    )
}

export default NewPost;

export async function action({request}) {
    const formData = await request.formData();
    const postData = Object.fromEntries(formData); // { body: '...', author: '...' }
    await fetch('http://localhost:8000/posts/', {
        method: "POST",
        body: JSON.stringify(postData),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
    });

    return redirect('/');
}