import React from 'react';
import useModel_report from './useModel_report';

const Average = () => {
  //여기서 함수도 받아온다 model객체에
  const model = useModel_report({
    number: 0,
    avg: 0,
    list: [20, 20, 20, 20, 20],
  });
  //임시변수에 저장
  const { number, avg, list } = model.state;
  const onSubmit = (e) => {
    e.preventDefault();
  };

  console.log('화면 재 구성함');
  return (
    <div>
      <form action="" onSubmit={onSubmit}>
        <input
          name="number"
          value={number}
          onChange={(e) => model.changeNumber(e.target.value)}
        />
        <button onClick={model.addNumber}>등록</button>
      </form>
      <ul>
        {list.map((value, index) => (
          <li key={index}>{value}</li>
        ))}
      </ul>
      <div>
        <b>평균값:</b>
        {avg}
      </div>
    </div>
  );
};

export default Average;
