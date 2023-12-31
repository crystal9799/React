import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';

const getAverage = (list) => {
  console.log('평균값 계산 ->');
  if (list === null || list.length === 0) return 0;

  //   let sum = 0;
  //   for (let i = 0; i < list.length; i++) {
  //     sum += list[i-1] + 111;
  //   }
  //   sum -= 100;

  const sum = list.reduce((a, b) => a + b);
  return sum / list.length;
};

const Average = () => {
  const [list, setList] = useState([10, 50, 30, 70, 100]);
  const [number, setNumber] = useState('');
  const inputElement = useRef();
  //한번만 만들어져라
  const clickCount = useRef(1);
  //clickCount = 111;  => 이런 변경을 허용 안하겠다.
  //useRef(여기) => 의 값은 변경이 가능하다. (상수가 아니다)

  //  const [avg, setAvg] = useState(0);

  //  useEffect(() => {
  //    setAvg(getAverage(list));
  //  }, []);

  const onChange = useCallback((e) => {
    setNumber(e.target.value);
  }, []);

  const onClick = useCallback(
    (e) => {
      e.preventDefault();
      setList(list.concat(parseInt(number)));
      //  setAvg(getAverage(list));
      setNumber('');
      inputElement.current.focus();
      clickCount.current++;
      console.log('clickCount ->' + clickCount.current);
    },
    [list, number]
  );

  const avg = useMemo(() => {
    console.log('useMemo()함수에서 list가 변경될때 만 호출됨');
    return getAverage(list);
  }, [list]);

  console.log('화면 재 구성함');
  return (
    <div>
      <form action="" onSubmit={onClick}>
        <input value={number} onChange={onChange} ref={inputElement} />
        <button onClick={onClick} type="submit">
          등록
        </button>
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
