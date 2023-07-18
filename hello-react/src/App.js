import React, { Component } from 'react';
import LifeCycleSample from './LifeCycleSample';
import ErrorBoundary from './ErrorBoundary';

function getRandomColor() {
  return '#' + Math.floor(Math.random() * 0xffffff).toString(16);
}

class App extends Component {
  state = {
    color: '#b46018',
    lifeCycleVisible: true,
  };

  handlerClick = () => {
    this.setState({ color: getRandomColor() });
  };

  handlerLifeCycleInvisible = () => {
    this.setState({ lifeCycleVisible: false });
  };

  handlerLifeCycleVisible = () => {
    this.setState({ lifeCycleVisible: true });
  };

  render() {
    return (
      <div>
        <button onClick={this.handlerClick}>랜덤 색상</button>
        {this.state.lifeCycleVisible && (
          <>
            <ErrorBoundary>
              <LifeCycleSample color={this.state.color} />
            </ErrorBoundary>
            <button onClick={this.handlerLifeCycleInvisible}>
              LifeCycleSample 숨김
            </button>
          </>
        )}
        <button onClick={this.handlerLifeCycleVisible}>
          LifeCycleSample 보임
        </button>
      </div>
    );
  }
}

export default App;
