import ds from "./../Dialogs.module.css";
import {NavLink} from "react-router-dom";
import React from "react";
import {DialogType} from "../../Types/Types";




export const DialogItem = (props: DialogType) => {

    let path = "/dialogs/" + props.id;

    return (
        <div className={ds.dialog + ' ' + ds.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}