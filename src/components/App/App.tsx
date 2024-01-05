import {FC} from 'react';
import { Route, Routes } from 'react-router-dom';
import styles from './App.module.scss';
import HomePage from '../../pages/HomePage/HomePage';
import CatalogServices from '../../pages/CatalogServices/CatalogServices';


const App: FC = () => {

  return (
    <main className={styles.App}>
      <Routes>
        <Route path='/sunny-ekb/' element={<HomePage />}/>
        <Route path='/sunny-ekb/catalogservices' element={<CatalogServices />}/>
      </Routes>
    </main>
  )
}

export default App;
