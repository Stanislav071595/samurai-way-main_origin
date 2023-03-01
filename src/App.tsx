import React from 'react';
import './App.css';


function App() {
    return (
        <div className="app-wrapper">
            <header className="header">
                <img src="https://i.pinimg.com/originals/b9/05/3d/b9053d873e9f69058997913e0fffca2e.png">
                </img>
            </header>
            <nav className="nav">
                <div>
                    <a>Profile</a>
                </div>
                <div>
                    <a>Messages</a>
                </div>
                <div>
                    <a>News</a>
                </div>
                <div>
                    <a>Music</a>
                </div>
                <div>
                    <a>Settings</a>
                </div>

            </nav>
            <div className="content">
                <div>
                    <img src="https://proprikol.ru/wp-content/uploads/2020/05/gorizont-krasivye-kartinki-10.jpg"/>
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
        </div>
    );
}

export default App;
