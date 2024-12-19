import React, { useState } from "react";
import './TodoApp/Todo.css';
import Header from './TodoApp/Header';
import Home from "./TodoApp/Home";

function App() {
    const [tasks, setTasks] = useState([]);
    const [input, setInput] = useState('');

    const addTasks = (newtask) => {
        if (newtask !== '') {
            setTasks(tasks => [...tasks, newtask]);
            setInput('');
        }
    };

    const resetTasks = () => {
        setTasks([]);
    }
    const removeTasks = () => {
        setTasks(tasks.slice(0, -1)); // Remove the last task
    };

    return (
        <div>
            <Header />
            <div style={{ padding: '25px' }}></div>
            <Home tasks={tasks} removeTasks={removeTasks} />
            <div className="add">
                <input style={{ width: '450px', height: '30px' }} type="text" placeholder="enter task" value={input} onChange={e => setInput(e.target.value)} />
                <button onClick={() => { addTasks(input) }}>Add task</button>
                <button onClick={resetTasks}>Reset</button>
            </div>
        </div >
    )
};

export default App;