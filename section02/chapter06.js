// 1. 배열 순회
let arr = [1, 2, 3];

// 1.1 배열 인덱스
for (let i = 0; i < arr.length; i++) {
    // console.log(arr[i]);
}
// length 는 배열의 길이를 저장하고 있다.

let arr2 = [4, 5, 6, 7, 8];
for(let i=0; i<arr2.length; i++) {
    // console.log(arr2[i]);
}

// 1.2 for of 반복문 (배열을 순회할 때만 쓰인다.)
// 인덱스를 사용하면 카운터 변수에 인덱스가 저장되기 때문에 for문 안에서 인덱스를 통한 활동을 할수있다.
// for of 반복문은 인덱스를 저장하지 않고 그냥 배열 안에 있는 값들을 순서대로 순회만 해준다.
for(let item of arr) {
    // console.log(item);
}

// 2. 객체 순회
let person = {
    name: "이정환",
    age: 27,
    hobby: "테니스",
};

// 2.1 Object.keys 사용
// -> 객체에서 key 값들만 뽑아서 새로운 배열로 반환

let keys = Object.keys(person);
// console.log(keys);

for (let i = 0; i < keys.length; i++) {
    // console.log(keys[i]);
}

for(let key of keys){
    // console.log(key, person[key]);
}

for (let key of keys) {
    const value = person[key];
    // console.log(key, value);
}

// 2.2 Object.values
// -> 객체에서 value 값들만 뽑아서 새로운 배열로 반환
let values = Object.values(person);
// console.log(values);

for (let value of values) {
    // console.log(value);
}

// 2.3 for in (객체를 순회할 때만 쓸 수 있다.)
for(let key in person){
    // console.log(key);
}

for(let key in person){
    const value = person[key];
    console.log(key, value);
}