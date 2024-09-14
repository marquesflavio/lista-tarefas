import Icons from "../../shared/icons/icons";

function Tasks(props) {
  return (
    <div>
      <ul className="space-y-4 p-6 bg-slate-200 rounded-md shadow">
        {props.tasks.map((task) => (
          <li className="flex gap-2" key={task.id}>
            <button
              className={`bg-slate-400 text-white text-left p-2 rounded-md list-none w-full ${
                task.completed && "line-through"
              }`}
              onClick={() => props.onTaskCompletedClick(task.id)}
            >
              {task.title}
            </button>
            <button className="bg-slate-400 p-2 rounded-md text-white">
              <Icons.SetaDireita />
            </button>
            <button
              className="bg-slate-400 p-2 rounded-md text-white"
              onClick={() => props.onDeleteTaskClick(task.id)}
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
