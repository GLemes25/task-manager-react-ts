import { ChevronLeftIcon } from "lucide-react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Title } from "../components/Title";

export const TaskPage = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const title = searchParams.get("title");
  const description = searchParams.get("description");

  return (
    <div className="h-screen w-full bg-slate-500 p-6">
      <div className="w-125 mx-auto space-y-4">
        <div className="flex justify-center relative mb-6">
          <button
            className="absolute left-0 text-slate-100"
            onClick={() => navigate(-1)}
          >
            <ChevronLeftIcon />
          </button>
          <Title>Detalhes da Tarefa</Title>
        </div>
        <div className="p-4 bg-slate-200 rounded-md shadow">
          <p className="text-xl text-slate-800 font-bold text-left"> {title}</p>
          <p className=" text-slate-600 font-bold text-left pt-2">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};
