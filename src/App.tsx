import React from 'react';
import './App.css';

function App() {

    const names = ["Dimych", "Sveta", "Katay", "Viktor", "Ignat"]

    const users = [
        {id: 1, name: "Dimych"},
        {id: 2, name: "Sveta"},
        {id: 3, name: "Katay"},
        {id: 4, name: "Viktor"},
        {id: 5, name: "Ignat"}]

    const liElements = users.map(u => <li key={u.id}>{u.name}</li>)

    return (
        <div className="App">
            <ul>
                {liElements}
            </ul>
        </div>
    );
}

export default App;
