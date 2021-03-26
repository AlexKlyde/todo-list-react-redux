import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { createTask } from '../tasks.actions';

const CreateTaskInput = () => {
  const [value, setValue] = useState('');
  const dispatch = useDispatch();

  const handleChange = event => {
    setValue(event.target.value);
  };

  const handleTaskCreate = () => {
    dispatch(createTask(value));
    setValue('');
  };

  return (
    <div className="create-task">
      <input className="create-task__input" type="text" value={value} onChange={handleChange} />
      <button className="btn create-task__btn" onClick={handleTaskCreate}>
        Create
      </button>
    </div>
  );
};

export default CreateTaskInput;
