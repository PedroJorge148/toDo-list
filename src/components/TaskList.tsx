import { Trash } from 'phosphor-react';
import clipboard from '../assets/Clipboard.svg';

import styles from './TaskList.module.css';

const tasks = [
  {
    id: 1,
    done: false,
    content: 'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.',
  },
  {
    id: 2,
    done: false,
    content: 'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.',
  },
  {
    id: 3,
    done: false,
    content: 'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.',
  },
  {
    id: 4,
    done: true,
    content: 'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.',
  },
  {
    id: 5,
    done: true,
    content: 'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.',
  }
];

export function TaskList() {
  return (
    <div className={styles.tasks}>

        <header className={styles.tasksHeader}>
          <div className={styles.tasksCreated}>
            <strong>Tarefas Criadas</strong>
            <span className={styles.counter}>{tasks.length}</span>
          </div>

          <div className={styles.tasksDone}>
            <strong>Concluídas</strong>
            <span className={styles.counter}>2 de 5</span>
          </div>
        </header>

        
        <div className={styles.content}>
          <div className={styles.item}>
            <input id ="teste" type="checkbox" name="done" />
            <p>Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.</p>
            <button>
              <Trash />
            </button>
          </div>
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
  );
}