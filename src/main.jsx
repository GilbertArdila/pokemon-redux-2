import React from 'react';
import ReactDOM from 'react-dom/client';
import thunk from 'redux-thunk';
import App from './App';
import './index.css';
import {pokemonsReducer} from './reducers/pokemos';
import {Provider} from 'react-redux';
//sin redux toolkit
import {applyMiddleware, compose, legacy_createStore as createStore} from 'redux';
import {prefix } from './middleWares';

//creamos un composedEnhancers que contenga varios enhancers para pasarlo al store
const composeAlt =  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const composedEnhancers = composeAlt(applyMiddleware(thunk));

//lo que ponemos despues de la coma son los enhancers para poder usar la herramienta de debuger
const store = createStore(pokemonsReducer,composedEnhancers);

ReactDOM.createRoot(document.getElementById('root')).render(
      //le estamos pasando el estado globla a toda la aplicación

  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
    
  </React.StrictMode>
)
