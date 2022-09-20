import { useState } from 'react';
import Button from './Button';
import InputField from './InputField';

export default function TaskInput({ setTasks }) {
    const [taskValues, setTaskValues] = useState({ taskName: '', taskDate: '', taskTime: '' });

    function setDataToStorage() {
        const prevData = JSON.parse(localStorage.getItem('Tasks'));
        localStorage.setItem(
            'Tasks',
            JSON.stringify(prevData ? [...prevData, taskValues] : [taskValues])
        );
        setTasks(JSON.parse(localStorage.getItem('Tasks')));
    }

    return (
        <section className="mt-10">
            <h1 className="text-center mb-8 text-2xl font-bold">Add Your Task</h1>
            <div className="flex flex-col md:flex-row justify-center items-center gap-2">
                <InputField
                    type="text"
                    placeholderText="Task Title"
                    classes="input border border-sky-500 max-w-xs bg-transparent"
                    value={taskValues.taskName}
                    setValue={(e) => {
                        setTaskValues((prev) => ({
                            taskName: e.target.value,
                            taskDate: prev.taskDate,
                            taskTime: prev.taskTime,
                        }));
                    }}
                />
                <InputField
                    type="date"
                    classes="input border border-sky-500 max-w-xs bg-transparent"
                    style={{ colorScheme: 'dark' }}
                    value={taskValues.taskDate}
                    setValue={(e) => {
                        setTaskValues((prev) => ({
                            taskName: prev.taskName,
                            taskDate: e.target.value,
                            taskTime: prev.taskTime,
                        }));
                    }}
                />
                <InputField
                    type="time"
                    classes="input border border-sky-500 max-w-xs bg-transparent"
                    style={{ colorScheme: 'dark' }}
                    value={taskValues.taskTime}
                    setValue={(e) => {
                        setTaskValues((prev) => ({
                            taskName: prev.taskName,
                            taskDate: prev.taskDate,
                            taskTime: e.target.value,
                        }));
                    }}
                />
                <Button
                    type="submit"
                    classes="btn bg-transparent border-sky-500 text-sky-500"
                    innerText="Submit"
                    onClick={() => {
                        setDataToStorage();
                        setTaskValues({ taskName: '', taskDate: '', taskTime: '' });
                    }}
                />
            </div>
        </section>
    );
}
