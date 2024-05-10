//JSX 주의사항
// 1. 중괄호 내부에는 자바스크립트 표현식만 넣을 수 있다.
// 2. 숫자, 문자열, 배열 값만 렌더링된다.
// 3. 모든 태그는 닫혀있어야한다.
// 4. 최상위 태그는 반드시 하나여야만 한다.

const Main = () => {
  const number = 16;
  const obj = { a: 1 };

  return (
    <main>
      <h1>main</h1>
      <h2>{number % 2 === 0 ? "짝수" : "홀수"}</h2>
      {obj.a}
    </main>
  );
};

export default Main;
