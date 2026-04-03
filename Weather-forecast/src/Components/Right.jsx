import "./Right.css"; 
import Today from "./Today"; 
import Week from "./Week"; 
import { useState } from "react";

const Right = ()=>{
    const [selectData, setSelectData] = useState("today"); 

    return (
        <div className="Right">
            <div className="header">
                <div className="data-sort">
                    <div className={`today ${selectData==="today" ? "clicked": ""}`} 
                    onClick={()=> setSelectData("today")}>
                        <h2>Today</h2>
                    </div>
                    <div className={`week ${selectData==="week" ? "clicked": ""}`} 
                    onClick={()=> setSelectData("week")}>
                        <h2>Week</h2>
                    </div>
                </div>
                <div className="web-title">
                    <h1>Atmos</h1>
                    <div className="logo"></div>
                </div>
            </div>
            {selectData === "today" ? <Today></Today> : <Week></Week>}
        </div>
    ); 
}; 

export default Right; 

/*
배운점 

1. 코드를 좀 더 리액트 스럽게 짜기위해선 다음 구현은 피해야 한다. 

    | 🚫 피해야 할 것     | ❌ 안 좋은 코드                  | ✅ React스럽게                   |
| -------------- | -------------------------- | ---------------------------- |
| DOM 직접 접근      | `document.querySelector()` | `useState`, `useRef`         |
| classList 조작   | `el.classList.add()`       | `className={조건 ? "on" : ""}` |
| 일반 변수로 상태 관리   | `let selected = "today"`   | `useState("today")`          |
| 렌더 함수 따로 호출    | `onClickDay()`             | `{조건 ? <A/> : <B/>}`         |
| 스타일 직접 변경      | `el.style.color = "red"`   | CSS + `className`            |
| props drilling | 여러 단계로 props 전달            | Context API                  |
| key 없는 리스트     | `map(item => <div>)`       | `key={item.id}`              |
| useEffect 남용   | 무조건 `useEffect` 사용         | 필요한 경우만 사용                   |
| 한 컴포넌트에 모든 로직  | API + UI + 상태 다 처리         | 역할 분리                        |
| imperative 방식  | “이거 해라” 식 코드               | 선언형 (state 기반)               |


*/