import Produits from './Produits';
// import Factures from './Factures'; 
import {Routes , Route } from 'react-router-dom';
import './index.css';

export default function App(){

  return (

    <Routes >
      <Route path="/produits" element={<Produits />} />
      {/* <Route path="./factures" element={<Factures/>} /> */}
    </Routes>
  )

}