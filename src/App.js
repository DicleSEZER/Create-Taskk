
import './App.css';
import TaskCreate from './components/TaskCreate';
import TaskList from './components/TaskList';
import { useState } from 'react';


function App() {
const [tasks, setTasks] = useState([])


  const createTask=(title,taskDesc)=>{
    const createdTasks = [
      ...tasks,{ //burada üç noktanın anlamı spread operatörü eksi diziyi yeni diziye ekler yani
        id:Math.round(Math.random()*999999999),//bu kadar yüksek sayı vermemizin nedeni rastgele değer ataması yapılırken ıdler birbirlerine çakışmasın.
        title,
        taskDesc
      }
    ]
    setTasks(createdTasks);
};

const deleteTaskById=(id)=>{
 const afterDeletingTask = tasks.filter((task)=>{
    return task.id!==id;

  })
setTasks(afterDeletingTask);
};

const editTaskById =(id,updatedTitle,updatedTaskDesc)=>{
const updatedTasks= tasks.map((task)=>{
  if(task.id ===id)
    {
      return{id,title:updatedTitle,taskDesc:updatedTaskDesc}
    }
   return task;
   });
   setTasks(updatedTasks)
}
  return (
    <div className="App">

      <TaskCreate onCreate={createTask}/>




      <h1>Görevler</h1>
     <TaskList  tasks={tasks} onDelete={deleteTaskById} onUpdate={editTaskById}/>
    </div>
  );
}

export default App;
