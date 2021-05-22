import { createStore, applyMiddleware} from 'redux';
import Reducer from '../reducer';
import thunk from "redux-thunk"
import {composeWithDevTools} from "redux-devtools-extension"

const store = createStore(
  Reducer,
  composeWithDevTools(applyMiddleware(thunk))//config para ver redux en windows en crome, y manejador de promesas async
  
  
);

export default store;