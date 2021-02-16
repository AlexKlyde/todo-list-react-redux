import React from 'react';
import { useSelector } from 'react-redux';
import Task from './Task';
import { sortedTasksListSelector } from '../tasks.selectors';

const TasksList = () => {
  const tasks = useSelector(state => sortedTasksListSelector(state));

  return (
    <ul className="list">
      {tasks.map(task => (
        <Task
          key={task.id}
          {...task}
        />
      ))}
    </ul>
  );
};

export default TasksList;
