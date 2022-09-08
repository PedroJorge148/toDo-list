import { PlusCircle } from 'phosphor-react'
import styles from './Newtask.module.css';

export function Newtask() {
  return (
    <form className={styles.formNewTask}>
      <input type="text" name="task" placeholder="Adicione uma nova tarefa" />
      <button type="submit">
        <span>Criar</span>
        <PlusCircle size={16}/>
      </button>
    </form>
  );
}