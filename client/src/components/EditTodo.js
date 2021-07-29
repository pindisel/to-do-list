import React, { useState } from "react";
import { AiOutlineEdit } from "react-icons/ai";
import "./EditTodo.css";

const EditTodo = ({ todos }) => {
    const [task, setTask] = useState(todos.task);

    const updateTask = async (e) => {
        e.preventDefault();
        try {
            const body = { task };
            if (task === null || task.match(/^\s*$/) !== null) {
                window.location = "/";
                return alert("You can't edit a task into an empty task");
            }
            await fetch(`https://kuis-sbd-be.herokuapp.com/${todos.id}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body),
            });
            window.location = "/";
        } catch (err) {
            console.error(err.message);
        }
    };

    return (
        <>
            <button type="button" className="btn btn-lg text-center" data-bs-toggle="modal" data-bs-target={`#id${todos.id}`}>
                <AiOutlineEdit className="btn-edit" />
            </button>
            <div className="modal fade" id={`id${todos.id}`} tabIndex="-1" aria-labelledby="editModalLabel" aria-hidden="true" onClick={() => setTask(todos.task)}>
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="editModalLabel">
                                Edit here!
                            </h5>
                            <button type="button" className="btn-close btn" data-bs-dismiss="modal" aria-label="Close" onClick={() => setTask(todos.task)}></button>
                        </div>
                        <form className="modal-body" onSubmit={(e) => updateTask(e)}>
                            <input type="text" className="form-control" value={task} onChange={(e) => setTask(e.target.value)} />
                        </form>
                        <div className="modal-footer" data-bs-dismiss="modal">
                            <button type="button" className="btn btn-modal" onClick={(e) => updateTask(e)}>
                                Edit
                            </button>
                            <button type="button" className="btn btn-modal" data-bs-dismiss="modal" onClick={() => setTask(todos.task)}>
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default EditTodo;
