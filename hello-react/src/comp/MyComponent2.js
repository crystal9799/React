import React from 'react';
import PropType from 'prop-types';
/* 
props = {
  name  : "홍길동",
  age   : 20
}
props의 값은 변경 할 수 없음
*/
export default function MyComponent2(props) {
  // const name = props.name;
  // const age = props.age;
  // const children = props.children;
  const { name, age } = props;
  // let { name, age } = props;
  //로직
  // name = "adfasd";
  return (
    <div>
      <h1>나의 두번째 컴포넌트</h1>
      <h2>이름 : {props.name}</h2>
      <h2>나이 : {props.age}</h2>
      <h2>이름 : {name}</h2>
      <h2>나이 : {age}</h2>
      <h2>자식 : {props.children}</h2>
    </div>
  );
}

/* MyComponent2.defaultProps = {
  name: '기본이름',
  age: '21',
}; */
// export default MyComponent2;
MyComponent2.propTypes = {
  name: PropType.string,
  favoriteNumber: PropType.number.isRequired,
};
