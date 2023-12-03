import {FC} from 'react';
import styles from './App.module.scss';
import HomePage from '../../pages/HomePage/HomePage';


const App: FC = () => {

  return (
    <main className={styles.App}>
      <HomePage />
    </main>
  )
}

export default App;
