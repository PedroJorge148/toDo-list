import { PlusCircle, Trash } from 'phosphor-react';
import { ChangeEvent, FormEvent, useState } from "react";
import clipboard from '../assets/Clipboard.svg';
import { Task } from "./Task";

import styles from './TaskList.module.css';

export function TaskList() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      done: false,
      content: 'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.',
    },
  ]);

  const [taskContent, setTaskContent] = useState('');

  const [done, setDone] = useState(0);

  function handleCreateTask(event: FormEvent) {
    event.preventDefault();

    const newTask = {
        id: tasks.length + 1,
        done: false,
        content: taskContent
      };

    setTasks([...tasks, newTask]);

    setTaskContent('');
  }

  function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>) {
    setTaskContent(event.target.value);
  }

  function onDeleteTask(taskIdToDelete: number) {
    const newTasksWithoutDeletedOne = tasks.filter(task => {
      return task.id != taskIdToDelete;
    });

    setTasks(newTasksWithoutDeletedOne);
  }

  return (
    <>
      <form onSubmit={handleCreateTask} className={styles.formNewTask}>
        <input 
          type="text" 
          name="task" 
          placeholder="Adicione uma nova tarefa"
          onChange={handleNewTaskChange} 
          value={taskContent}
          required 
        />
        <button type="submit">
          <span>Criar</span>
          <PlusCircle size={16}/>
        </button>
      </form>

      <div className={styles.tasks}>

          <header className={styles.tasksHeader}>
            <div className={styles.tasksCreated}>
              <strong>Tarefas Criadas</strong>
              <span className={styles.counter}>{tasks.length}</span>
            </div>

            <div className={styles.tasksDone}>
              <strong>Concluídas</strong>
              <span className={styles.counter}>{done} de {tasks.length}</span>
            </div>
          </header>
          
          <div className={styles.content}>
            {tasks.map(task => {
              return (
                <Task 
                  key={task.id}
                  id={task.id}
                  done={task.done}
                  content={task.content}
                  onDeleteTask={onDeleteTask}
                />
              )
            })}
          </div>

          {/* 
          <div className={styles.empty}>
            <img src={clipboard}  />

            <div>
              <strong>Você ainda não tem tarefas cadastradas</strong>
              <p>Crie tarefas e organize seus itens a fazer </p>
            </div>
            
          </div>
          */}
      </div>
    </>
  );
}