// 바닐라 JavaScript를 사용하여 React 컴포넌트 정의
function App() {
  return document.createElement('div');
}

// 렌더링 함수
function render(component, container) {
  container.innnerHTML = 'Hello, world!'; // 컨테이너 비우기
  container.appendChild(component()); //컴포넌트 렌더링
}

// 렌더링 실행
render(App, document.getElementById('root'));