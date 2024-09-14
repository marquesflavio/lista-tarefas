import { useState } from "react";

function AddTasks({ onAddTaskClick }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  return (
    <div className="flex flex-col space-y-4 bg-slate-200 rounded-md p-4">
      <input
        type="text"
        placeholder="Nova Tarefa"
        className="p-2 border border-slate-300 outline-slate-400 rounded-md"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="Descrição da Tarefa"
        className="p-2 border border-slate-300 outline-slate-400 rounded-md"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button
        className="bg-slate-500 p-2 rounded-md text-white"
        onClick={() => {
          if (!title.trim() || !description.trim())
            return alert("Preencha todos os campos");
          onAddTaskClick(title, description);
          setTitle("");
          setDescription("");
        }}
      >
        Adicionar
      </button>
    </div>
  );
}

export default AddTasks;
