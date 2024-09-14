import { useNavigate } from "react-router-dom";
import Icons from "../../shared/icons/icons";

function Tasks({ tasks, onTaskCompletedClick, onDeleteTaskClick }) {
  const navigate = useNavigate();

  function SeeDetailsClick(task) {
    const query = new URLSearchParams();
    query.set("title", task.title);
    query.set("description", task.description);
    navigate(`/task?${query.toString()}`);
  }

  return (
    <div>
      <ul className="space-y-4 p-6 bg-slate-200 rounded-md shadow">
        {tasks.map((task) => (
          <li className="flex gap-2" key={task.id}>
            <button
              className={`bg-slate-400 text-white text-left p-2 rounded-md list-none w-full ${
                task.completed && "line-through"
              }`}
              onClick={() => onTaskCompletedClick(task.id)}
            >
              {task.title}
            </button>
            <button
              className="bg-slate-400 p-2 rounded-md text-white"
              onClick={() => SeeDetailsClick(task)}
            >
              <Icons.SetaDireita />
            </button>
            <button
              className="bg-slate-400 p-2 rounded-md text-white"
              onClick={() => onDeleteTaskClick(task.id)}
            >
              <Icons.Lixeira />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Tasks;
