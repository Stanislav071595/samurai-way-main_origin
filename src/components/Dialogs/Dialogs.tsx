import React from 'react';
import ds from './Dialogs.module.css'
import {NavLink} from "react-router-dom";
import {Message} from "./Message/Message";
import {DialogItem} from "./DialogItem/DialogItem";
import {DialogsType} from "../Types/Types";




export const Dialogs = (props: DialogsType) => {


    let dialogElements = props.dialogs.map( d =>  <DialogItem name={d.name } id={d.id}/>  )

    let messagesElements = props.messages.map( m => <Message message={m.message}/>)

    return (
        <div className={ds.dialogs}>
            <div className={ds.dialogsItems}>
                {dialogElements}
            </div>
            <div className={ds.messages}>
                {messagesElements}
            </div>
        </div>

    )
}