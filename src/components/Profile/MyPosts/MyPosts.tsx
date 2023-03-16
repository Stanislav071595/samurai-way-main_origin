import React from 'react';
import ps from './MyPosts.module.css';
import {Post} from "./Post/Post";

export const MyPosts = () => {

    let postData = [
        {id: 1, post: "How are you?", likesCount: 39},
        {id: 2, post: "How old are you?", likesCount: 26},
        {id: 3, post: "What is your name?", likesCount: 19},
    ]

    return (

        <div className={ps.postsBlock}>
            <h3>My posts</h3>
            <div>
                <textarea></textarea>
            </div>
            <div>
                <button>Add post</button>
            </div>
            <Post message={postData[0].post} like={postData[0].likesCount} />
            <Post message={postData[1].post} like={postData[1].likesCount}/>
            <Post message={postData[2].post} like={postData[2].likesCount}/>
        </div>
    )
}