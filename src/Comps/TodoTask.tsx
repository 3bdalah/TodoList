import React from 'react'
import { ITask } from '../Interfaces';






interface Props {
    task: ITask;
    complateTask(taskNameToDelete : string):void;
}

const TodoTask = ({task,complateTask}:Props) =>{
    return (
        <div className="task">
            <div className="content">
                <span> {task.taskName} </span>
                <span>{task.deadline} </span>
            </div>
            <button onClick={() => {complateTask(task.taskName)}}>X</button>
        </div>
    )
}

export default TodoTask;
