// CJS (Common JS 모듈 시스템)
/* 
const moduleData = require("./math");

console.log(moduleData.add(1, 2));
console.log(moduleData.sub(1, 2));

// 객체 구조분해 할당을 이용해서
const {add, sub} = require("./math");

console.log(add(1, 2));
console.log(sub(1, 2));
*/
// ESM (ES 모듈 시스템)
// 확장자까지 붙여줘야한다.
import mul from "./math.js";
import {add, sub} from "./math.js";


// import mul, {add, sub} from "./math.js";

// console.log(add(1, 2));
// console.log(sub(1, 2));
// console.log(mul(2, 3));


// node.js 라이브러리 사용하기
import randomColor from "randomcolor";

const color = randomColor();
console.log(color);


