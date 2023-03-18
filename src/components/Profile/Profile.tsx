import React from 'react';
import ps from './Profile.module.css';
import {MyPosts, postsPropsType, postsType} from "./MyPosts/MyPosts";
import {Post} from "./MyPosts/Post/Post";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";



export const Profile = (props: postsType) => {


    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={props.posts}/>
        </div>
    )
}