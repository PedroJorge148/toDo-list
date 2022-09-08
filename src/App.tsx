import { Header } from "./components/Header";
import { Newtask } from "./components/Newtask";

import './global.css';
import styles from './App.module.css';

import clipboard from './assets/Clipboard.svg';
export function App() {
  return (
    <>
      <Header />
      
      <div className={styles.wrapped}>
        <Newtask />

        <div>
            <header>
              <div>
                <strong>Tarefas Criadas</strong>
                <span>0</span>
              </div>

              <div>
                <strong>Concluídas</strong>
                <span>0</span>
              </div>
            </header>


            <div>
              <img src={clipboard}  />
              <strong>Você ainda não tem tarefas cadastradas</strong>
              <p>Crie tarefas e organize seus itens a fazer </p>
            </div>
        </div>
      </div>
    </>
  )
}
