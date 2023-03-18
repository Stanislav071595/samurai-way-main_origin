import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

let posts = [
    {id: 1, post: "How are you?", likesCount: 39},
    {id: 2, post: "How old are you?", likesCount: 26},
    {id: 3, post: "What is your name?", likesCount: 19},
]
let dialogs = [
    {id: 1, name: "Stanislav"},
    {id: 2, name: "Elvira"},
    {id: 3, name: "Alexandr"},
    {id: 4, name: "Nina"},
    {id: 5, name: "Marat"},
    {id: 6, name: "Ruslan"}
]
let messages = [
    {id: 1, message: "Hi"},
    {id: 2, message: "How are you?"},
    {id: 3, message: "What's up?"},
    {id: 4, message: "Where are you?"},
    {id: 5, message: "How is your day?"},
    {id: 6, message: "Yoooo bro"}
]

ReactDOM.render(
    <App posts={posts} dialogs={dialogs} messages={messages}/>,
  document.getElementById('root')
);