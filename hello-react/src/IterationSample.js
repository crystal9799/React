import React, { useState } from 'react';

const IterationSample = () => {
  const [inputText, setInputText] = useState('');
  const [names, setNames] = useState([
    { id: 1, text: '눈사람' },
    { id: 2, text: '얼음' },
    { id: 3, text: '눈' },
    { id: 4, text: '바람' },
  ]);
  const handlerRemove = (id) => {
    setNames(names.filter((item) => item.id !== id));
  };
  const nameList = names.map((item) => (
    <li key={item.id}>
      {item.id}:{item.text}
      <button onClick={() => handlerRemove(item.id)}>삭제</button>
    </li>
  ));

  const handlerSubmit = (e) => {
    e.preventDefault();
    console.log('입력된 값 = ' + inputText);
    setNames(names.concat({ id: names.length + 1, text: inputText }));
    setInputText('');
    return false;
  };

  const handlerChange = (e) => {
    setInputText(e.target.value);
  };
  return (
    <div>
      <div>
        <form name="myForm" action="" onSubmit={handlerSubmit}>
          <input type="text" value={inputText} onChange={handlerChange}></input>
          <button type="submit">추가</button>
        </form>
      </div>
      <ul>{nameList}</ul>
    </div>
  );
};

export default IterationSample;
