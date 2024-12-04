// 1. 함수 표현식
function funcA() {
    //console.log("funcA");
}

let varA = funcA;
varA();

let varB = function (){ //익명함수(함수이름이없다는뜻)
    //console.log("funcB");
};
varB();

// 2. 화살표 함수
// let varC = () => {
//     return 1;
// };

//console.log(varC());
// 값을 반환하기만 하면
// let varC = () => 1;

// console.log(varC());

let varC = (value) => {
    console.log(value);
    return value + 1;
};

console.log(varC(10));