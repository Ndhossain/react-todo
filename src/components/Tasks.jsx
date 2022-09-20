import Button from './Button';

/* eslint-disable react/no-array-index-key */
// eslint-disable-next-line no-unused-vars
export default function Tasks({ tasks, setTasks }) {
    return (
        <section className="mt-10">
            <h1 className="text-center mb-8 text-2xl font-bold">My Tasks</h1>
            <div>
                {tasks?.map((task, index) => (
                    <div
                        className="bg-white/5 border border-sky-500 m-3 p-5 rounded-xl flex gap-3 flex-col lg:flex-row justify-between items-center"
                        key={index}
                    >
                        <p>
                            <span className="font-bold">Task Name:</span> {task.taskName}
                        </p>
                        <p>
                            <span className="font-bold">Task Time:</span> {task.taskTime}
                        </p>
                        <p>
                            <span className="font-bold">Task Date:</span> {task.taskDate}
                        </p>
                        <Button
                            type="button"
                            classes="btn border-sky-500 bg-transparent"
                            innerText={
                                <span className="material-icons-outlined text-sky-500">delete</span>
                            }
                            onClick={() => {
                                const restTasks = tasks.filter(
                                    (alltask) =>
                                        alltask.taskName !== task.taskName ||
                                        alltask.taskDate !== task.taskDate ||
                                        alltask.taskTime !== task.taskTime
                                );
                                localStorage.setItem('Tasks', JSON.stringify(restTasks));
                                setTasks(JSON.parse(localStorage.getItem('Tasks')));
                            }}
                        />
                    </div>
                ))}
            </div>
        </section>
    );
}
