import { useNavigate, useSearchParams } from "react-router-dom";
import Icons from "../shared/icons/icons";
import Title from "../components/Title/Title";

function TaskPage() {
  //hook do router dom para buscar parâmetros na URl.
  const [searchParams] = useSearchParams();
  const title = searchParams.get("title");
  const description = searchParams.get("description");
  const navigate = useNavigate();

  return (
    <div className="h-screen w-screen bg-slate-500 p-6 flex justify-center">
      <div className="w-[500px] space-y-4">
        <div className="flex items-center  justify-center relative">
          <button
            className="absolute left-0 top-0 bottom-0 text-slate-100"
            onClick={() => navigate(-1)}
          >
            <Icons.SetaEsquerda />
          </button>
          <Title>Detalhes da Tarefa</Title>
        </div>
        <div className="bg-slate-200 p-4 rounded-md">
          <h1 className="text-xl font-bold text-slate-600">{title}</h1>
          <p className="text-slate-600">{description}</p>
        </div>
      </div>
    </div>
  );
}

export default TaskPage;
