// 스코프
// -> 전역(전체 영역) 스코프 / 지역(특정 영역) 스코프
// -> 전역 스코프 : 전체 영역에서 접근 가능
// -> 지역 스코프 : 특정 영역에서만 접근 가능

let a = 1; // 전역 스코프

function funcA(){
    let b = 2; // 지역 스코프
    console.log(a);

    // function funcA() {} //지역 스코프
}

funcA();

 // 함수선언식은 함수 블록안에서만 지역스코프를 갖는다. 나머지 if문이나 for문에서는 지역스코프를 갖지않는다.
if (true) {
    let c = 1;
    // function funcA() {} //지역 스코프 갖지않는다
}
for(let i =0; i < 10; i++) {
    let d = 1;
    // function funcA() {} //지역 스코프 갖지않는다
}

