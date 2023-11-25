// React 라이브러리 가져오기
import React from 'react';
import ReactDOM from 'react-dom';

// 간단한 React 컴포넌트 정의
const App = () => {
  return (
    <div>
      <h1>Hello, React!</h1>
    </div>
  )
}

// React 컴포넌트를 페이지의 root 엘리먼트에 렌더링
ReactDOM.render(<App />, document.getElementById('root'));