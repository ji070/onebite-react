// 배열 메서드 중요하다
// 6가지의 요소 조작 메서드

// 1. push
// 배열의 맨 뒤에 새로운 요소를 추가하는 메서드
/*
let arr1 = [1, 2, 3];
arr1.push(4, 5, 6, 7);

console.log(arr1);
*/
let arr1 = [1, 2, 3];
const newlength = arr1.push(4, 5, 6, 7);

// console.log(arr1);
// console.log(newlength);

// 2. pop
// 배열의 맨 뒤에 있는 요소를 제거하고, 반환
let arr2 = [1, 2, 3];
const popeditem = arr2.pop();

// console.log(popeditem);
// console.log(arr2);

// 3. shift
// 배열의 맨 앞에 있는 요소를 제거, 반환
let arr3 = [1, 2, 3];
const shifteditem = arr3.shift();
// console.log(shifteditem, arr3)

// 4. unshift
// 배열의 맨 앞에 새로운 요소를 추가하는 메서드
let arr4 = [1, 2 ,3];
const newlength2 = arr4.unshift(0);
// console.log(newlength2, arr4);

// 3,4 번은 1,2 번 보다 느리게 동작한다.

// 5. slice
// 마치 가위처럼, 배열의 특정 범위를 잘라내서 새로운 배열로 반환

let arr5 = [1, 2, 3, 4, 5];
let sliced = arr5.slice(2, 5); // 2번 인덱스부터 시작해서 5번인덱스 전까지(4번 인덱스) 자른다.
let sliced2 = arr5.slice(2); // 끝까지 자를 거면 두번째 인수는 안적어도 된다.
// console.log(sliced);
// console.log(arr5);
// console.log(sliced2);

let sliced3 = arr5.slice(-1); // 뒤에서부터 하나만 자르라는 의미이다.
// let sliced3 = arr5.slice(-3); // 뒤에서부터 3개 자르라는 의미이다.
// console.log(sliced3);

// 6. concat
// 두개의 서로 다른 배열을 이어 붙여서 새로운 배열을 반환

let arr6 = [1, 2];
let arr7 = [3, 4];

let concatedArr = arr6.concat(arr7);
console.log(concatedArr);
