// 3가지 Hook 관련된 팁
// 1. 함수 컴포넌트 및 커스텀 훅 내부에서만 사용 가능
// 2. 조건부로 호출될 수는 없다.
// 3. 커스텀훅을 직접 만들 수 있다.

import { useState } from "react";
import useInput from "../hooks/useInput";

const HookExam = () => {
  const [input, onChange] = useInput();

  return (
    <div>
      <input value={input} onChange={onChange}></input>
    </div>
  );
};

export default HookExam;
