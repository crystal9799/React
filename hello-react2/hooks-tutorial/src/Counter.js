import React, { useEffect, useReducer, useState } from 'react';

function model(state, action) {
  //데이터 처리 루틴
  //처리 루틴 여러개가 될 수 있다.
  //state는 관리하는 상태 변수 (읽기 위해)
  //action은 명령 ( 여러 처리 루틴을 구분하는 KEY )
  switch (action.type) {
    case 'incValue':
      return { value: state.value + 1 };
    case 'decValue':
      return { value: state.value - 1 };
    default:
      return state;
  }
}

const Counter = () => {
  //setValue를 실행하면 내부적으로 Counter함수가 또 실행된다.
  //다만 useState(0)에 대해서는 최초에 한번만 동작한다.

  //상태변수 선언
  //const [value, setValue] = useState(0);
  const [state, dispatch] = useReducer(model, { value: 0 });
  //model: 처리 함수 (데이터 관리 함수)
  //{value : 0} : 초기값 -> state가 초기값을 받는 변수
  //disaptch : action을 수행할 함수를 나타냄

  //아래에 선언된 것은 데이터 관리 함수
  const incValue = () => {
    //setValue(value + 1);
    dispatch({ type: 'incValue' });
  };

  const decValue = () => {
    //setValue(value - 1);
    dispatch({ type: 'decValue' });
  };
  //아래는 출력에 대한 코드
  return (
    <div>
      <p>
        {/* 아래 코드는 상태 코드 출력 (읽기) */}
        현재 카운트 값은 <b>{state.value} </b>입니다
      </p>
      {/* 아래 코드는 상태 코드 값을 변경 */}
      <button onClick={incValue}>1 증가</button>
      <button onClick={decValue}>1 감소</button>
    </div>
  );
};

export default Counter;
