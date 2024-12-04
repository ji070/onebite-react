/*
const Main = () => {
    const number = 9;

    return (
        <main>
            <h1>main</h1>
            <h2>{number % 2 === 0 ? "짝수" : "홀수"}</h2>
        </main>
    );
};

export default Main;
*/

// JSX 주의사항
// 1. 중괄호 내부에는 자바스크립트 표현식만 넣을 수 있다
/*
const Main = () => {
    const number = 9;

    return (
        <main>
            <h1>main</h1>
            <h2>{number % 2 === 0 ? "짝수" : "홀수"}</h2>
            {10}
            {number}
            {if(){}} // 안된다.
            {for(){}} // 안된다.
        </main>
    );
};

export default Main;
*/
// 2. 숫자, 문자열, 배열 값만 랜더링 된다
/*
const Main = () => {
    const number = 9;
    const obj = {a:1};

    return (
        <main>
            <h1>main</h1>
            <h2>{number % 2 === 0 ? "짝수" : "홀수"}</h2>
            {10}
            {number}
            {[1, 2, 3]}
            {/* {true}
            {undefined}
            {null} 안나온다.}
            {obj.a}
        </main>
    );
};

export default Main;
*/

// 3. 모든 태그는 닫혀있어야 한다.
/*
const Main = () => {
    const number = 9;
    const obj = {a:1};

    return (
        <main>
            <img></img>
            <h1>main</h1>
            <h2>{number % 2 === 0 ? "짝수" : "홀수"}</h2>
            {10}
            {number}
            {[1, 2, 3]}
            {true}
            {undefined}
            {null}
            {obj.a}
        </main>
    );
};

export default Main;
*/

// 4. 최상위 태그는 반드시 하나여야만 한다
// <></> 빈태그로만 해도 괜찮다. 여기선 <main></main> 대신
/*
const Main = () => {
    const number = 9;
    const obj = {a:1};

    return (
        <main>
            <img></img>
            <h1>main</h1>
            <h2>{number % 2 === 0 ? "짝수" : "홀수"}</h2>
            {10}
            {number}
            {[1, 2, 3]}
            {true}
            {undefined}
            {null}
            {obj.a}
        </main>
    );
};

export default Main;
*/

/*
const Main = () => {
    const user = {
        name: "이정환",
        isLogin: false,
    };

    if (user.isLogin) {
        return <div>로그아웃</div>;
    } else {
        return <div>로그인</div>;
    }
    // return <>
    // {user.isLogin ? 
    // (<div>로그아웃</div>) : 
    // (<div>로그인</div>)}
    // </>
};

export default Main;
*/

/*
const Main = () => {
    const user = {
        name: "이정환",
        isLogin: true,
    };

    if (user.isLogin) {
        return <div 
        style={{
            backgroundColor: "red",
            borderBottom: "5px solid blue",
        }}
        > 
        로그아웃 
        </div>;
    } else {
        return <div>로그인</div>;
    }
    // return <>
    // {user.isLogin ? 
    // (<div>로그아웃</div>) : 
    // (<div>로그인</div>)}
    // </>
};

export default Main;
*/

import "./Main.css";

const Main = () => {
    const user = {
        name: "이정환",
        isLogin: true,
    };

    if (user.isLogin) {
        return <div className="logout"> 로그아웃 </div>;
    } else {
        return <div>로그인</div>;
    }
    // return <>
    // {user.isLogin ? 
    // (<div>로그아웃</div>) : 
    // (<div>로그인</div>)}
    // </>
};

export default Main;



