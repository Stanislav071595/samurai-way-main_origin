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

    let dialogsData = [
        {id: 1, name: "Stanislav"},
        {id: 2, name: "Elvira"},
        {id: 3, name: "Alexandr"},
        {id: 4, name: "Nina"},
        {id: 5, name: "Marat"},
        {id: 6, name: "Ruslan"}
    ]
    let messagesData = [
        {id: 1, message: "Hi"},
        {id: 2, message: "How are you?"},
        {id: 3, message: "What's up?"},
        {id: 4, message: "Where are you?"},
        {id: 5, message: "How is your day?"},
        {id: 6, message: "Yoooo bro"}
    ]

    return (
        <div className={ds.dialogs}>
            <div className={ds.dialogsItems}>
                <DialogItem name={dialogsData[0].name } id={dialogsData[0].id}/>
                <DialogItem name={dialogsData[1].name } id={dialogsData[1].id}/>
                <DialogItem name={dialogsData[2].name } id={dialogsData[2].id}/>
                <DialogItem name={dialogsData[3].name } id={dialogsData[3].id}/>
                <DialogItem name={dialogsData[4].name } id={dialogsData[4].id}/>
                <DialogItem name={dialogsData[5].name } id={dialogsData[5].id}/>

            </div>
            <div className={ds.messages}>
                <Message message={messagesData[0].message}/>
                <Message message={messagesData[1].message}/>
                <Message message={messagesData[2].message}/>
                <Message message={messagesData[3].message}/>
                <Message message={messagesData[4].message}/>
                <Message message={messagesData[5].message}/>

            </div>
        </div>

    )
}