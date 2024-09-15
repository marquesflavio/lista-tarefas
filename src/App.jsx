import { useEffect, useState } from "react";
import Tasks from "./components/Tasks/Tasks";
import AddTasks from "./components/AddTasks/AddTasks";
import { v4 } from "uuid";
import Title from "./components/Title/Title";

function App() {
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks")) || []
  );

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  //#region CASO DESEJE USAR API

  // useEffect(() => {
  //   const fetchTasks = async () => {
  //     const response = await fetch(
  //       "https://jsonplaceholder.typicode.com/todos?_limit=10"
  //     );
  //     const data = await response.json();
  //     setTasks(data);
  //   };

  //   fetchTasks();
  // }, []);

  //#endregion

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
        <Title>Gerenciador de Tarefas</Title>
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
