import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));


//inial stat
let inilStat = {
  todos:[
  
  ],
};

//stote
let store = createStore(ADD);


//action
export  const  addTodoAction=(payload)=>{
  return{ 
    type:"ADD_TODO",
    payload 

  } 
}

export const  deleteTodoAction=(payload)=>{
  return{ 
    type:"DELETE_TODO",
    payload
  }
}  

//reducer
function ADD (inial = inilStat , action)
{
  switch(action.type)
  {
    case 'ADD_TODO':
      return {...inial,todos:[...inial.todos , action.payload]};
      case 'DELETE_TODO':
        return {...inial,todos:[...inial.todos.filter((item,index)=> index !== action.payload) ]};
        default :
        return inial;
  }
}





root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
         <App />
    </BrowserRouter>
    </Provider>
  </React.StrictMode>
);


reportWebVitals();
