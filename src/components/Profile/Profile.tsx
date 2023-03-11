import React from 'react';
import ps from './Profile.module.css';
import {MyPosts} from "./MyPosts/MyPosts";
import {Post} from "./MyPosts/Post/Post";

export const Profile = () => {
    return (
        <div>
            <div>
                <img src="https://proprikol.ru/wp-content/uploads/2020/05/gorizont-krasivye-kartinki-10.jpg"/>
            </div>
            <div>
                ava + description
            </div>
            <MyPosts />
        </div>
    )
}