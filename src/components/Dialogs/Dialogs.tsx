import React from 'react';
import ds from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

type DialogItemType = {
    name: string
    id: number
}

const DialogItem = (props: DialogItemType) => {

    let path = "/dialogs/" + props.id;

    return (
        <div className={ds.dialog + ' ' + ds.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

type MessageType = {
    message: string
}

const Message = (props: MessageType) => {
    return <div className={ds.message}>{props.message}</div>
}

export const Dialogs = (props: DialogItemType) => {
    return (
        <div className={ds.dialogs}>
            <div className={ds.dialogsItems}>
                <DialogItem name="Stanislav" id={1}/>
                <DialogItem name="Elvira" id={2}/>
                <DialogItem name="Alexandr" id={3}/>
                <DialogItem name="Nina" id={4}/>
                <DialogItem name="Marat" id={5}/>
                <DialogItem name="Ruslan" id={6}/>
            </div>
            <div className={ds.messages}>
                <Message message={"Hi"}/>
                <Message message={"How are you?"}/>
                <Message message={"What's up?"}/>
            </div>
        </div>

    )
}