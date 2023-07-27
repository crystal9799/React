import React, { useCallback, useRef, useState } from 'react';
import { MdAdd } from 'react-icons/md';
import './TodoInsert.scss';

const TodoInsert = ({ insertTodo }) => {
  
  const [value, setValue] = useState('');
  const inputBox = useRef();

  const onChange = useCallback((e) => {
    setValue(e.target.value);
  });

  const onSubmit = useCallback((e) => {
    e.preventDefault();
    inputBox.current.focus();

    if (value === '' && value.length === 0) {
      alert('할일을 입력해 주세요');
      return false;
    }
    //할일을 추가한다
    insertTodo(value);

    setValue('');
    return false;
  });

  return (
    <form className="TodoInsert" onSubmit={onSubmit}>
      <input
        ref={inputBox}
        value={value}
        onChange={onChange}
        placeholder="할일을 입력하세요"
        required
      />
      <button type="submit">
        <MdAdd />
      </button>
    </form>
  );
};
export default TodoInsert;
