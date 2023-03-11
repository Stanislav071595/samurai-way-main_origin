import React from "react";
import pis from './ProfileInfo.module.css'

export const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img src="https://proprikol.ru/wp-content/uploads/2020/05/gorizont-krasivye-kartinki-10.jpg"/>
            </div>
            <div className={pis.descriptionBlock}>
                ava + description
            </div>
        </div>
    )
}