import React from "react"
import logo from "./logo.svg"
import "./App.css"

function App() {
    return (
        <div className="pattern">
            <h1
                style={{
                    fontSize: "50px",
                    position: "absolute",
                    fontWeight: "200",
                    top: "40%",
                    left: "40%",
                }}
            >
                오늘의 운세
            </h1>
            <p>오늘의 운세</p>
            <h1>Hello World</h1>
            <h1>반갑습니다</h1>
            {/* <div
                style={{
                    fontSize: "50px",
                    position: "absolute",
                    fontWeight: "200",
                    top: "40%",
                    left: "40%",
                }}
            >
                세리프가 있는 글꼴은 세리프체(serif typeface, serifed
                typeface)라 하며, 세리프가 없는 글꼴은 산세리프체(sans-serif,
                여기서 sans는 “없음”을 뜻하는 프랑스어 낱말 sans에서 비롯)로
                부릅니다.
            </div> */}
        </div>
    )
}

export default App
