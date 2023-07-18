import React, { useState } from 'react';
import InputComponent from './InputComponent';
import ListComponent from './ListComponent';

const IterationSample_Single = () => {
  const [names, setNames] = useState([
    { id: 1, text: '눈사람' },
    { id: 2, text: '얼음' },
    { id: 3, text: '눈' },
    { id: 4, text: '바람' },
  ]);

  const remove = (id) => {
    setNames(names.filter((item) => item.id !== id));
  };

  const insert = (inputText) => {
    setNames(
      names.concat({ id: names[names.length - 1].id + 1, text: inputText })
    );
  };

  return (
    <div>
      <InputComponent insert={insert} />
      <ListComponent remove={remove} names={names} />
    </div>
  );
};

export default IterationSample_Single;
