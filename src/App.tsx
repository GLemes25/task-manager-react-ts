import { useEffect, useState } from "react";

import { AddTask } from "./components/AddTask";
import { Tasks } from "./components/Tasks";
import { Title } from "./components/Title";

export type TaskType = {
  id: string;
  title: string;
  description: string;
  isDone: boolean;
};
const App = () => {
  const taskStored = localStorage.getItem("tasks");
  const [tasks, setTasks] = useState<TaskType[]>(() => {
    return taskStored ? JSON.parse(taskStored) : [];
  });

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  useEffect(() => {
    // Chamar a APi para pegar as Tarefas
    // const fetchTasks = async () => {
    //   const response = await fetch(
    //     "https://jsonplaceholder.typicode.com/todos?_limit=10",
    //   );
    //   const data = await response.json();
    //   setTasks(data);
    // };
    // fetchTasks();
  }, []);

  return (
    <div className="min-h-screen w-full bg-slate-500 flex justify-center p-6">
      <div className="w-125 space-y-4">
        <Title>Gerenciador de Tarefas</Title>
        <AddTask tasks={tasks} setTasks={setTasks} />
        {tasks.length > 0 ? (
          <Tasks tasks={tasks} setTasks={setTasks} />
        ) : (
          <> </>
        )}
      </div>
    </div>
  );
};

export default App;
