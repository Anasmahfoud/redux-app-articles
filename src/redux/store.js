import { legacy_createStore } from "redux";
import produitReducer from './reducers/produitReducer';


const Store  = legacy_createStore(produitReducer) ; 

export default Store;