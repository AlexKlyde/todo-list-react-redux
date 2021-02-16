import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import TasksList from './TasksList';
import CreateTaskInput from './CreateTaskInput';
import { getTaskList } from '../tasks.actions';

const TodoList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTaskList());
  }, []);

  return (
    <>
      <h1 className="title">Todo List</h1>
      <main className="todo-list">
        <CreateTaskInput />
        <TasksList />
      </main>
    </>
  );
};

export default TodoList;
