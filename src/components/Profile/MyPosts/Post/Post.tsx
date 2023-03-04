import React from 'react';
import ps from './Post.module.css';


type PostPropsType = {
    message: string
    like: number
}

export const Post = (props: PostPropsType) => {
    return (
        <div className={ps.item}>
            <img src="https://f1academy.com.my/wp-content/uploads/2020/09/Profile-02.png"></img>
            <span>{props.message}</span>
            <div>
                <span>Like: {props.like}</span>
            </div>
        </div>
    )
}