import { PlusCircle, Trash } from 'phosphor-react';
import { ChangeEvent, FormEvent, useState } from "react";
import clipboard from '../assets/Clipboard.svg';
import { Task } from "./Task";

import styles from './TaskList.module.css';

interface TaskProps {
  id: number
  content: string
  done: boolean
}

export function TaskList() {
  const [tasks, setTasks] = useState<TaskProps[]>([]);

  const [taskContent, setTaskContent] = useState('');

  const [done, setDone] = useState(0);

  function handleCreateTask(event: FormEvent) {
    event.preventDefault();

    const newTask = {
        id: tasks.length + 1,
        content: taskContent,
        done: false,
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

  function handleChangeCheckbox(id: number) {
    const taskDone = tasks.map((task) => {
      if(task.id == id) {
        return {
          ...task,
          done: !task.done
        }
      } else {
        return task;
      }
    })

    setTasks(taskDone)
  }

  const doneTasks = tasks.filter((task) => task.done).length

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
              <span className={styles.counter}>{doneTasks} de {tasks.length}</span>
            </div>
          </header>
          
          <div className={styles.content}>
            { tasks.length == 0 ? 
              <>
                <img src={clipboard}  />

                <div>
                  <strong>Você ainda não tem tarefas cadastradas</strong>
                  <p>Crie tarefas e organize seus itens a fazer </p>
                </div>
              </> 
              :
              tasks.map(task => {
                return (
                  <Task 
                    key={task.id}
                    id={task.id}
                    done={task.done}
                    content={task.content}
                    onDeleteTask={onDeleteTask}
                    onChangeCheckbox={handleChangeCheckbox}
                  />
                )
              })
            
            }
          </div>

          
          
            
            
        
      </div>
    </>
  );
}