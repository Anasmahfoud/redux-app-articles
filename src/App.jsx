import   Produits from './Produits';
import Factures from './Factures'; 
import {Routes , Route , NavLink} from 'react-router-dom';



export default function App(){

  return (

    <Routes >
      <Route path="./produits" element={<Produits/>} />
      <Route path="./factures" element={<Factures/>} />
    </Routes>
  )

}