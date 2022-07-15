import { useState } from "react";
import { } from "react-dnd";
import "./Board.css";
import List from "./List";
import defaultTasks from "./tasks";


const Board = () => {
    const [tasks, setTasks] = useState(tasks);
    return (
        <>
            <h1>This is a board</h1>
            <div className="board">
                <List type="NOT STARTED"/>
                <List type="IN PROGRESS"/>
                <List type="FINISHED"/>
            </div>
        </>
    )
};

const Task = ({ task }) => {
    return (
        <div className="task" draggable="true">
            {task.name}
        </div>
    )
};

export default Board;