import React from 'react';
import classes from './Profile.module.css';

export const Profile = () => {
    return (
        <div className={classes.content}>
            <div>
                <img className={classes.content_img} src="https://proprikol.ru/wp-content/uploads/2020/05/gorizont-krasivye-kartinki-10.jpg"/>
            </div>
            <div>
                ava + description
            </div>
            <div>
                My posts
                <div>
                    New Post
                </div>
            </div>
            <div>
                <div>
                    post1
                </div>
                <div>
                    post2
                </div>
            </div>
        </div>
    )
}