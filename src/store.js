import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import tasksReducer from './tasks/tasks.reducer';

const reducer = combineReducers({
  tasks: tasksReducer,
});

const composedEnhancer = composeWithDevTools(applyMiddleware(thunk));  

const store = createStore(reducer, composedEnhancer);

export default store;