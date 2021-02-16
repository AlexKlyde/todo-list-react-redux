import React from 'react';
import { useDispatch } from 'react-redux';
import classNames from 'classnames';

import { updateTask, deleteTask } from '../tasks.actions';

const Task = ({ id, done, text}) => {
  const dispatch = useDispatch();

  return (
    <li className={classNames('list-item', { 'list-item_done': done })}>
      <input
        className="list-item__checkbox"
        type="checkbox"
        defaultChecked={done}
        onChange={() => dispatch(updateTask(id))}
      />
      <span className="list-item__text">{text}</span>
      <button className="list-item__delete-btn" onClick={() => dispatch(deleteTask(id))} />
    </li>
  );
};

export default Task;
