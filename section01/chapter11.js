// 함수 선언
/*
function greeting () {
    console.log("안녕하세요!");
}
console.log("호출 전");
greeting(); //함수의 이름을 불러서 함수를 호출해야 나온다. 함수를 호출할때 반드시 소괄호와 함께 호출해야한다.
console.log("호출 후");
*/

// 함수
/*
function getArea () {
    let width = 10;
    let height = 20;
    let area = width * height;

    console.log(area);
}

getArea();
*/
/*
function getArea (width, height) {
    let area = width * height;

    console.log(area);
}

getArea(10, 20);
getArea(30, 20);
getArea(120, 200);
*/
/*
function getArea (width, height) {
    let area = width * height;

    return area;
    // console.log("hello"); // 함수가 return 문을 만나게 되면 그냥 값을 반환하고 바로 종료가 된다. return문 밑에 코드를 추가적으로 작성해도 실질적으로는 수행되지 않는다.
}

let area1 = getArea(10, 20);
console.log(area1);
let area2 = getArea(30, 20);
console.log(area2);
getArea(120, 200);
*/
 // 함수안에 또다른함수 선언하는거 가능
function getArea (width, height) {
    
    function another() { //중첩 함수
        console.log("another")
    }
    another();
    let area = width * height;

    return area;
}

let area1 = getArea(10, 20);
console.log(area1);
let area2 = getArea(30, 20);
console.log(area2);
getArea(120, 200);


// 호이스팅
// -> 끌어올리다 라는 뜻
// 선언문을 호출문보다 아래에 두어도 호이스팅이 되어서 아무런 문제없이 실행이 된다.
