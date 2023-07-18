import React, { Component } from 'react';
import { MyComponent } from './comp/MyComponent';

class Counter extends Component {
  /*   constructor(props) {
    //부모의 파라미터를 가져옴
    super(props);
    // 자식의 number = 부모의 number
    this.state = {
      number: props.number,
      fixedNumber: 0,
    };
  } */

  state = {
    number: 0,
    fixedNumber: 0,
  };

  number = 0;
  render() {
    //this.state의 요소중 number임을 나타냄
    const { number } = this.state;
    const { fixedNumber } = this.state;
    return (
      <div>
        <h1>{number}</h1>
        <h2>변경되지 않는 값 : {fixedNumber}</h2>
        <button
          onClick={() => {
            //동기 / 비동기 -> 함수 실행시 끝나고 다음으로 넘어감 / 함수가 끝나지 않아도 다음으로 넘어감
            console.log('버튼 클릭 ... 값 증가 전', this.state);
            // this.number++;
            // this.setState({ number: number + 1 }); //비동기로 내부적으로 render() 함수 호출 [데이터가 변화됐을 때만]
            // this.setState({ number: number + 1 }); //비동기이기 때문에, 하나를 버려버린다. [동일한 값이 대상이라서]

            //람다구문을 가지고 실행하면, prevState는 무조건 이전 데이터가 들어감
            this.setState((prevState) => {
              return { number: prevState.number + 1 };
            }); //동기화 루틴 state값을 변경함
            //state.number -> 2
            console.log('버튼 클릭 값증가후1 ... ', this.state.number);
            this.setState((prevState) => {
              //[prevState.number 값은 2]
              return { number: prevState.number + 1 };
            }); //동기화 루틴 state값을 변경함
            //마지막에 비동기로 render() 함수 호출
            console.log('버튼 클릭 값증가후2 ... ', this.state.number);
          }}
        >
          1증가
        </button>
        <MyComponent name="홍길동" age={this.state.number} />
      </div>
    );
  }
}

export default Counter;
