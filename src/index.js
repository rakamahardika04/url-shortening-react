import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore } from 'redux';

// import redux from 'redux';
import {Provider} from 'react-redux';

const initialState = {
    url: '',
    datas: [],
}

function clearArray(array) {
    while (array.length > 0) {
      array.pop();
    }
  }

// Reducers 
const rootReducer = (state = initialState, action) => {
    switch(action.type){
        case "SET_URL": 
            return {
                ...state,
                url: state.url = action.url
            }
            break;
        case "GET_DATA_FROM_DB":
                clearArray(state.datas)
                action.newData.map(data => {
                    state.datas.push(data)
                })
            
            return {
                ...state
            }
            break;
        default:
            return {
                ...state
            }
    }
    return state;
}

// Store
const store = createStore(rootReducer);

// Subscription
// store.subscribe(() => {
//     console.log('STORE CHANGED: \n', store.getState())
// })

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
