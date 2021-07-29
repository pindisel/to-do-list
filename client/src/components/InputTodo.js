import React, { useState } from "react";
import "./InputTodo.css";
import { AiOutlinePlusCircle } from "react-icons/ai";

const InputTodo = () => {
    const [task, setTask] = useState("");
    const [input, setInput] = useState(false);

    const submitForm = async (e) => {
        e.preventDefault();
        try {
            const body = { task };
            if (task === null || task.match(/^\s*$/) !== null) {
                window.location = "/";
                return alert("You can't add an empty task");
            }
            await fetch("https://kuis-sbd-be.herokuapp.com", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body),
            });

            window.location = "/";
        } catch (err) {
            console.error(err.message);
        }
    };

    const showInput = () => {
        setInput(true);
    };

    const hideInput = () => {
        setInput(false);
    };

    return (
        <>
            {input ? (
                <div className="mt-5 mb-4 pb-3 ps-3 pe-3 input">
                    <button className="btn-close btn m-1 djsajdfdis" onClick={hideInput} />
                    <form className="d-flex form-floating" onSubmit={submitForm}>
                        <input type="text" className="form-control" placeholder="Create New Task" id="floatingInput" value={task} onChange={(e) => setTask(e.target.value)} />
                        <label htmlFor="floatingInput">Create New Task</label>
                        <button className="btn btn-add">Add</button>
                    </form>
                </div>
            ) : (
                <div className="d-flex justify-content-center mt-3">
                    <button className="btn btn-add">
                        <AiOutlinePlusCircle className="add-btn" onClick={showInput} size={25} />
                    </button>
                </div>
            )}
        </>
    );
};

export default InputTodo;
