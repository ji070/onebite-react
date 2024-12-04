import './App.css'
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
//"./components/Header.jsx"이렇게 파일의 확장자까지 안써도 된다.

/* 함수선언식말고도 화살표 함수로도 컴포넌트를 만들 수 있다. 클래스도 가능하다(클래스는 작성해야하는 코드가 많아진다.)
function Header() {
  return (
    <header>
      <h1>header</h1>
    </header>
  );
}
*/
// 컴포넌트를 선언하는 함수는 반드시 첫글자가 대문자여야한다.
/*
const Header = () => {
  return (
    <header>
      <h1>header</h1>
    </header>
  );
}
*/

/*
function App() {
  return (
    <>
    <Header/>
    <Main/>
    <Footer/>
    </>
  );
}

export default App
*/

//5.4
/*
import './App.css'
import Button from "./components/Button";

function App() {
  return (
    <>
    <Button text={"메일"} color={"red"}/>
    <Button text={"카페"}/>
    <Button text={"블로그"}/>
    </>
  );
}

export default App
*/

/*
import './App.css'
import Button from "./components/Button";

function App() {
  const buttonProps = {
    text: "메일",
    color: "red",
    a: 1,
    b: 2,
    c: 3,
  };
  return (
    <>
    <Button {...buttonProps}/>
    <Button text={"카페"}/>
    <Button text={"블로그"}/>
    </>
  );
}

export default App
*/

/*
import './App.css'
import Button from "./components/Button";

function App() {
  const buttonProps = {
    text: "메일",
    color: "red",
    a: 1,
    b: 2,
    c: 3,
  };
  return (
    <>
    <Button {...buttonProps}/>
    <Button text={"카페"}/>
    <Button text={"블로그"}>
    {/* <div>자식요소</div>
    <Header/>
    </Button>
    </>
  );
}

export default App
*/

// 5.6
/*
import './App.css'
import {useState} from "react";

// 반환값을 변수에 저장하기보다는 배열로 받을거니깐 배열의 비 구조화 할당(구조 분해 할당) 문법을 이용한다
function  App() {
  const [count, setCount] = useState(0);
  const [light, setLight] = useState("OFF");

  return  <> 
  <div>
    <h1>{light}</h1>
    <button onClick={() => {
      setLight(light === "ON" ? "OFF" : "ON");
    }}
    >
      {light === "ON" ? "끄기" : "켜기"}
      </button>
  </div>
  <div>    
    <h1>{count}</h1>
  <button onClickCapture={() => {
    setCount(count + 1);
  }}
  >
    +
  </button>
  </div>

  </>;
}

export default App
*/

//5.7
/*
import './App.css'
import {useState} from "react";

import Bulb from "./components/Bulb";
import Counter from "./components/Counter";

function  App() {
  return  <> 
    <Bulb/>
  <Counter/>
  </>;
}

export default App
*/

// 5.8, 5.9, 5.10-1
// 회원가입폼을 렌더링하는 컨퍼런트를 만들거다
/*
import './App.css'
import Register from './components/Register'

function  App() {
  return  <>
  <Register/>
  </>;
}

export default App
*/

// 5.11

import './App.css'
import HookExam from './components/HookExam';

function  App() {
  return  <>
  <HookExam/>
  </>;
}

export default App


