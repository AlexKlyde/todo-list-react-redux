import { TASKS_LIST_RECEIVED } from './tasks.actions';
// import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  tasksList: [],
};

/* const tasksReducer = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    tasksListRecieved(state, action) {
      const tasksList = action.payload
      state.tasksList = tasksList
    }
  },
}); */

const tasksReducer = (state = initialState, action) => {
  switch (action.type) {
    case TASKS_LIST_RECEIVED:
      return {
        ...state,
        tasksList: action.payload.tasksList,
      };
    default:
      return state;
  }
};

/* export const { tasksListRecieved } = tasksReducer.actions;

export default tasksReducer.reducer; */
export default tasksReducer;
