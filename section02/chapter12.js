// function task(){
//     setTimeout(() => {
//         console.log("안녕하세요!");
//     }, 3000);
// }

// task();

// function add(a, b){
//     setTimeout(() => {
//         const sum = a + b;
//         console.log(sum);
//     }, 3000);
// }

// add(1, 2);

// function add(a, b){
//     setTimeout(() => {
//         const sum = a + b; /// 3
//         console.log(sum);
//     }, 3000);
// }

// add(1, 2, (value)=> {
//     console.log(value);
// });

// 음식을 주문하는 상황
function orderFood(callback){
    setTimeout(() => {
        const food = "떡볶이";
        callback(food);
    }, 3000);
}

// 음식을 식히다.
function cooldownFood(food, callback){
    setTimeout(() => {
        const cooldownedFood = `식은 ${food}`;
        callback(cooldownedFood);
    }, 2000);
}

// 음식을 냉동시킨다.
function freezeFood(food, callback) {
    setTimeout(() => {
        const freezedFood = `냉동된 ${food}`;
        callback(freezedFood)
    }, 1500);
}

// 들여쓰기가 점점 깊어진다.
orderFood((food) => {
    console.log(food);

    cooldownFood(food, (cooldownedFood) => {
        console.log(cooldownedFood);

        freezeFood(cooldownedFood, (freezedFood) => {
            console.log(freezedFood);
        });
    });
});








