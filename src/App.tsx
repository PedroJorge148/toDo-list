import { Header } from "./components/Header";
import { Newtask } from "./components/Newtask";

import './global.css';
import styles from './App.module.css';
import { TaskList } from "./components/TaskList";

export function App() {
  return (
    <>
      <Header />
      
      <Newtask />
      <div className={styles.wrapped}>

        <TaskList />
      </div>
    </>
  )
}
