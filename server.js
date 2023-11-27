// http 모듈을 사용하여 간단한 웹 서버 생성
const http = require('http');
const fs = require('fs');
const path = require('path');

// http.createServer() 메서드를 사용하여 서버 생성
const server = http.createServer((req, res) => {
  // 요청된 파일의 경로를 생성
  let filePath = '.' + req.url;

  // 루트 경로인 경우 기본적으로 index.html로 설정
  if (filePath === './') {
    filePath = './src/index.html';
  }

  // 파일의 확장자를 확인하여 Content-Type 결정
  const extname = path
})