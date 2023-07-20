import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducer'; // Replace this with the actual path to your rootReducer

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;