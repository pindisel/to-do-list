import React from "react";
import "./App.css";

import ListTodo from "./components/ListTodo";
import InputTodo from "./components/InputTodo";

function App() {
    return (
        <>
            <div className="container">
                <h1 className="text-center display-3 mt-5">To-Do List</h1>
                <p className="text-center lead">
                    Finishing your to-do list makes you <mark>happy</mark>.
                </p>
                <ListTodo />
                <InputTodo />
            </div>
        </>
    );
}

export default App;
