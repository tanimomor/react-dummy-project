import PostList from "../components/PostList.jsx";
import { Outlet } from 'react-router-dom'
import {useState} from "react";

function Posts() {
    return (
        <>
            <Outlet />
            <main>
                <PostList/>
            </main>
        </>
    );
}

export default Posts;

export async function loader() {
    const response = await fetch('http://localhost:8000/posts/');
    const resData = await response.json();
    return resData;
}