import { Trash } from "phosphor-react";

import styles from './Task.module.css';

interface TaskProps {
  id: number,
  done: boolean,
  content: string,
  onDeleteTask: (id: number) => void,
  onChangeCheckbox: (id: number) => void
}

export function Task({id, done, content, onDeleteTask, onChangeCheckbox}:TaskProps) {

  function handleDeleteTask() {
    onDeleteTask(id);
  }

  function handleChangeCheckbox() {
    onChangeCheckbox(id);
  }

  return (
    <div className={styles.item}>                
      <div>
        <input id={'task' + id} type="checkbox" onChange={handleChangeCheckbox} /> 

        <label htmlFor={'task' + id}>
          <p>{content}</p>
        </label>
      </div>

      <button onClick={handleDeleteTask} title="Deletar Tarefa">
        <Trash size={24} />
      </button>
      
    </div>
  )
}