// math 모듈
/*
function add(a, b) {
    return a+ b;
}

function sub(a, b) {
    return a - b;
}
*/
// CJS (Common JS 모듈 시스템)
/*
module.exports = {
    add,
    sub,
};
*/

// ESM (ES 모듈 시스템)

// export { add, sub };

export function add(a, b) {
    return a + b;
}

export function sub(a, b) {
    return a - b;
}
// math모듈을 대표하는 기본값으로  {}없이 불러오도록 설정해줘야한다.
export default function multiply(a, b) {
    return a * b;
}