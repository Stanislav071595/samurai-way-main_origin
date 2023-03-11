import React from 'react';
import ps from './Profile.module.css';
import {MyPosts} from "./MyPosts/MyPosts";
import {Post} from "./MyPosts/Post/Post";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";

export const Profile = () => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts/>
        </div>
    )
}