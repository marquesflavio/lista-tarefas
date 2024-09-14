import { useState } from "react";
import Tasks from "./components/Tasks/Tasks";
import AddTasks from "./components/AddTasks/AddTasks";
import { v4 } from "uuid";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Estudar JavaScript",
      description: "Estudar JavaScript para aprender React",
      completed: false,
    },
    {
      id: 2,
      title: "Estudar React",
      description: "Estudar React para se tornar um Full Stack Developer",
      completed: false,
    },
    {
      id: 3,
      title: "Estudar Inglês",
      description: "Estudar Inglês para aprender trabalhar internacionalmente",
      completed: false,
    },
  ]);

  function onAddTaskClick(title, description) {
    setTasks([
      ...tasks,
      {
        id: v4(),
        title,
        description,
        completed: false,
      },
    ]);
  }

  function onTaskCompletedClick(Taskid) {
    const newTasks = tasks.map((task) => {
      if (task.id === Taskid) {
        return {
          ...task,
          completed: !task.completed,
        };
      }
      return task;
    });
    setTasks(newTasks);
  }

  function onDeleteTaskClick(Taskid) {
    const newTasks = tasks.filter((task) => task.id !== Taskid);
    setTasks(newTasks);
  }

  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
      <div className="w-[500px] space-y-4">
        <h1 className="text-3xl text-slate-100 font-bold text-center">
          Gerenciador de Tarefas
        </h1>
        <AddTasks onAddTaskClick={onAddTaskClick} />
        <Tasks
          tasks={tasks}
          onTaskCompletedClick={onTaskCompletedClick}
          onDeleteTaskClick={onDeleteTaskClick}
        />
      </div>
    </div>
  );
}

export default App;
