// 1. Falsy한 값
let f1 = undefined;
let f2 = null;
let f3 = 0;
let f4 = -0;
let f5 = NaN;
let f6 = "";
let f7 = 0n; 
// 0n은 big integer이라는 특수한 자료형에 해당하는 값이다. 아주아주 큰 숫자를 저장하는데 사용하는 값이다. 웹개발중에는 잘 이용하지않는다.

/*
if(!f1){
    console.log("falsy");
}
*/

// 2. Truthy 한 값
// -> 7가지 Falsy 한 값을 제외한 나머지 모든 값
let t1 = "hello";
let t2 = 123;
let t3 = [];
let t4 = {};
let t5 = () => {}; // 화살표함수
/*
if(t4){
    console.log("Truthy");
}
*/

// 3. 활용 사례
/*
function printName(person) {
    if (person === undefined || person === null) {
        console.log("person의 값이 없음");
        return;
    }
    console.log(person.name);
}
let person = null;
printName(person);
*/
function printName(person) {
    if (!person) {
        console.log("person의 값이 없음");
        return;
    }
    console.log(person.name);
}

let person = {name: "이정환"};
printName(person);

// let person = {name: "이정환"}; 이렇게 해야하는 이유는?
// let person = "이정환"; 이렇게 하면 왜 안되는지...