import React from 'react';
import ps from './MyPosts.module.css';
import {Post} from "./Post/Post";

export const MyPosts = () => {
    return (

        <div>
            My posts
            <div>
                New Post
            </div>
            <Post message="How are you?" like={39}/>
            <Post message="How old are you?" like={26}/>
            <Post message="What is your name?" like={19}/>
        </div>
    )
}