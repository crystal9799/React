import React, { Component } from 'react';

class IterationSample_Func extends Component {
  state = {
    names: [
      { id: 1, text: '눈사람' },
      { id: 2, text: '얼음' },
      { id: 3, text: '눈' },
      { id: 4, text: '바람' },
    ],
  };
  inputRef = React.createRef();

  handlerRemove = (id) => {
    this.setState({
      names: this.state.names.filter((item) => item.id !== id),
    });
  };

  handlerSubmit = (e) => {
    e.preventDefault();
    this.setState({
      names: this.state.names.concat({
        id: this.state.names.length + 1,
        text: this.inputRef.current.value,
      }),
    });
    this.inputRef.current.value = '';
  };

  render() {
    const nameList = this.state.names.map((item) => (
      <li key={item.id}>
        {item.id}:{item.text}
        <button onClick={() => this.handlerRemove(item.id)}>삭제</button>
      </li>
    ));
    return (
      <div>
        <div>
          <form name="myForm" action="" onSubmit={this.handlerSubmit}>
            <input type="text" name="inputText" ref={this.inputRef}></input>
            <button type="submit">추가</button>
          </form>
        </div>
        <ul>{nameList}</ul>
      </div>
    );
  }
}

export default IterationSample_Func;
