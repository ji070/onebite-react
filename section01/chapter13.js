// 1. 콜백함수
/*
function main(value) {
    console.log(value);
}
function sub() {
    console.log("i am sub");
}

main(sub);
*/
/*
function main(value) {
    value();
}
function sub() {
    console.log("i am sub");
}

main(sub);
*/
// 콜백함수는 메인함수가 언제든지 원하는때에 실행시킬수있다.
/*
function main(value) {
    console.log(1);
    console.log(2);
    value();
    console.log("end");
}
function sub() {
    console.log("i am sub");
}

main(sub);
*/
// 위에랑 같다.
// main(function () {
//     console.log("i am sub");
// });
// 위에랑 같다.
// main(() => {
//     console.log("i am sub");
// });

// 2. 콜백함수의 활용
/*
// 콜백함수를 이용하면 중복코드를 발생시키지 않으면서 코드를 만들수있다.
function repeat(count) {
    for (let idx = 1; idx <= count; idx++) {
        console.log(idx);
    }
}

function repeatDouble(count) {
    for (let idx = 1; idx <= count; idx++) {
        console.log(idx * 2);
    }
}

function repeatTriple(count) {
    for (let idx = 1; idx <= count; idx++) {
        console.log(idx * 3);
    }
}

repeat(5);
repeatDouble(5);
*/

function repeat(count, callback) {
    for (let idx = 1; idx <= count; idx++) {
        callback(idx);
    }
}

repeat(5, function (idx) {
    console.log(idx);
});

repeat(5, function (idx) {
    console.log(idx * 2);
});

repeat(5, function (idx) {
    console.log(idx * 3);
});