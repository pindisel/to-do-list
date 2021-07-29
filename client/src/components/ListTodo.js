import React, { useEffect, useState } from "react";
import EditTodo from "./EditTodo";
import "./ListTodo.css";

const ListTodo = () => {
    const [task, setTask] = useState([]);

    const getTasks = async () => {
        try {
            const response = await fetch("https://kuis-sbd-be.herokuapp.com");
            const data = await response.json();

            setTask(data);
        } catch (err) {
            console.error(err.message);
        }
    };

    const deleteTodo = async (id) => {
        try {
            await fetch(`https://kuis-sbd-be.herokuapp.com/${id}`, {
                method: "DELETE",
            });
            window.location = "/";
        } catch (err) {
            console.error(err.message);
        }
    };

    useEffect(() => {
        getTasks();
    }, []);

    return (
        <>
            <div className="table-responsive mt-3">
                <table className="table table-striped">
                    <thead className="text-center">
                        <tr className="table-head">
                            <th className="col-sm-1"></th>
                            <th className="col-sm-9">Things You Have To Do</th>
                            <th>Edit</th>
                        </tr>
                    </thead>
                    <tbody>
                        {task.map((todos) => (
                            <tr className="align-middle" key={todos.id}>
                                <td>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" onClick={() => deleteTodo(todos.id)} />
                                    </div>
                                </td>
                                <td>{todos.task}</td>
                                <td className="text-center">
                                    <EditTodo todos={todos} />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default ListTodo;
