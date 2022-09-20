import { useState } from 'react';
import TaskInput from './TaskInput';
import Tasks from './Tasks';

export default function MainBody() {
    const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem('Tasks')));

    return (
        <main className="sm:w-11/12 md:w-10/12 sm:mx-auto mx-5">
            <TaskInput setTasks={setTasks} />
            <Tasks tasks={tasks} setTasks={setTasks} />
        </main>
    );
}
