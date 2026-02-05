import { useState } from "react";
import { v4 } from "uuid";
import type { TaskType } from "../App";
import { Input } from "./Input";

type propsTaskType = {
  tasks: TaskType[];
  setTasks: (tasks: TaskType[]) => void;
};
export const AddTask = ({ tasks, setTasks }: propsTaskType) => {
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");

  const onAddTaskSubmit = (title: string, description: string) => {
    if (title.trim() === "" || description.trim() === "") {
      alert("Digite o titulo e a descrição da tarefa");
      return;
    }

    const task: TaskType = {
      id: v4(),
      title,
      description,
      isDone: false,
    };
    setTasks([...tasks, task]);
    setTitle("");
    setDescription("");
  };

  return (
    <div className=" space-y-4 p-6 bg-slate-200 rounded-md shadow">
      <Input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Digite o titulo da Tarefa"
      />

      <Input
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Digite a Descrição da Tarefa"
      />

      <button
        className="bg-slate-500 text-white px-4 py-2 rounded-md font-medium"
        onClick={() => onAddTaskSubmit(title, description)}
      >
        Adicionar
      </button>
    </div>
  );
};
