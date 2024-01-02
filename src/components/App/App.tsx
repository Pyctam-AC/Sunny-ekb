import {FC} from 'react';
import styles from './App.module.scss';
import HomePage from '../../pages/HomePage/HomePage';
import { Route, Routes } from 'react-router-dom';


const App: FC = () => {

  return (
    <main className={styles.App}>
      <Routes>
        <Route path='/Sunny-ekb/' element={<HomePage />} />
      </Routes>
    </main>
  )
}

export default App;
