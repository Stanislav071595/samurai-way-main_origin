import React from 'react';
import ps from './MyPosts.module.css';
import {Post} from "./Post/Post";

export type postsPropsType = {
    id: number
    post: string
    likesCount: number
}

export type postsType = {
    posts: postsPropsType[]
}

export const MyPosts = (props: postsType) => {



    let postsElements = props.posts.map( p => <Post message={p.post} like={p.likesCount}/>)

    return (

        <div className={ps.postsBlock}>
            <h3>My posts</h3>
            <div>
                <textarea></textarea>
            </div>
            <div>
                <button>Add post</button>
            </div>
            <div>
            {postsElements}
            </div>
        </div>
    )
}