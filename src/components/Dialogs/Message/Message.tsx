import ds from "./../Dialogs.module.css";
import React from "react";

type MessageType = {
    message: string
}

export const Message = (props: MessageType) => {
    return <div className={ds.message}>{props.message}</div>
}