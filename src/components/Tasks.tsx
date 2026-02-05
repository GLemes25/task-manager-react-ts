import { CheckIcon, ChevronRightIcon, TrashIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";
import type { TaskType } from "../App";
import { Button } from "./Button";

type propsTaskType = {
  tasks: TaskType[];
  setTasks: (tasks: TaskType[]) => void;
};

export const Tasks = ({ tasks, setTasks }: propsTaskType) => {
  const navigate = useNavigate();
  const onTaskClick = (taskId: string) => {
    const newTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, isDone: !task.isDone };
      }
      return task;
    });
    setTasks(newTasks);
  };

  const onDeleteTaskClick = (taskId: string) => {
    const newTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(newTasks);
  };

  const onSeeDetailsClick = (task: TaskType) => {
    const query = new URLSearchParams();
    query.set("title", task.title);
    query.set("description", task.description);
    navigate(`/task?${query.toString()}`);
  };
  return (
    <ul className="space-y-4 p-6 bg-slate-200 rounded-md shadow">
      {tasks.map((task) => (
        <li key={task.id} className="flex  gap-2">
          <button
            className={`bg-slate-400 text-left flex items-center gap-2 w-full text-white p-2 rounded-md ${task.isDone ? "line-through" : ""}`}
            onClick={() => onTaskClick(task.id)}
          >
            {task.isDone && <CheckIcon />}
            {task.title}
          </button>
          <Button onClick={() => onSeeDetailsClick(task)}>
            <ChevronRightIcon />
          </Button>
          <Button
            onClick={() => {
              onDeleteTaskClick(task.id);
            }}
          >
            <TrashIcon />
          </Button>
        </li>
      ))}
    </ul>
  );
};
