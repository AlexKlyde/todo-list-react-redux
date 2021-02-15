import { tasksListSelector } from './tasks.selectors';
import * as tasksGateway from './tasksGateway';

export const TASKS_LIST_RECEIVED = 'TASKS/TASKS_LIST_RECEIVED';

export const tasksListRecieved = tasksList => {
  const action = {
    type: TASKS_LIST_RECEIVED,
    payload: {
      tasksList,
    },
  };
  return action;
};

export const getTaskList = () => {
  const thunkAction = dispatch => {
    tasksGateway.fetchTasksList()
      .then(tasksList => dispatch(tasksListRecieved(tasksList)));
  };
  return thunkAction;
};

export const updateTask = taskId => {
  const thunkAction = (dispatch, getState) => {
    const state = getState();
    const tasksList = tasksListSelector(state);
    const task = tasksList.find(task => task.id === taskId);
    const updatedTasks = {
      ...task,
      done: !task.done,
    };
    tasksGateway.updateTask(taskId, updatedTasks)
      .then(() => dispatch(getTaskList()));
  };
  return thunkAction;
};

export const deleteTask = taskId => {
  const thunkAction = dispatch => {
    tasksGateway.deleteTask(taskId)
      .then(() => dispatch(getTaskList()));
  };
  return thunkAction;
};

export const createTask = text => {
  const thunkAction = dispatch => {
    const taskData = {
      text,
      done: false,
      createdAt: new Date().toISOString(),
    };
    tasksGateway.createTask(taskData)
      .then(() => dispatch(getTaskList()));
  };
  return thunkAction;
};
