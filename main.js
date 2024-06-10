// 자바스크립트 함수는 함수의 실제 매개변수가 될 수 있다.
// 자바스크립트 함수는 함수의 반환값이 될 수 있다.
// 자바스크립트 함수는 할당명령문의 대상이 될 수 있다.
// 자바스크립트 함수는 동일비교의 대상이 될 수 있다.

// 1. 기본값 매개변수 default function parameter
// 2. 나머지 매개변수 Rest parameter
// 3. arguments 객체

function foo(arg) {
  console.log(arguments);
}

foo(1, 2, 3, 4);

// 1. 함수 선언문
// 2. 함수 표현식
// 3. Function 생성자 함수
// 4. 화살표 함수 표현식

const foo = () => {
  console.log("foo4");
};
// function () {
//   console.log("foo");
// };

foo();

// IIFE (즉시 실행 함수)
// 재귀함수
// 중첩함수
// 콜백함수

(function foo() {
  console.log("foo");
})();

function foo(arg) {
  if (arg === 3) return;

  console.log(arg);
  foo(arg + 1);
}

foo(1);

function foo(arg) {
  function bar() {
    console.log(arg);
  }
  bar();
}

foo(1);

function foo(arg) {
  arg();
}

foo(() => {
  console.log(1);
});
