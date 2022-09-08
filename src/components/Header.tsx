import styles from './Header.module.css';
import TodoLogo from '../assets/Logo.svg';

export function Header() {
  return (
    <header className={styles.header}>
      <img src={TodoLogo} alt="ToDo List Logo" />
    </header>
  );
}