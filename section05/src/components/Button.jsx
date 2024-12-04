/*
// 점표기법으로 한거
const Button = (props) => {
    console.log(props);
    return  <button style={{color: props.color}}>
        {props.text} - {props.color.toUpperCase()}
        </button>;
};



Button.defaultProps = {
    color: "black",
};

export default Button;
*/

//객체구조분해할당 이용
/*
const Button = ({text, color}) => {
    return  <button style={{color: color}}>
        {text} - {color.toUpperCase()}
        </button>;
};

Button.defaultProps = {
    color: "black",
};

export default Button;
*/

/*
const Button = ({text, color, children}) => {
    return  <button style={{color: color}}>
        {text} - {color.toUpperCase()}
        {children}
        </button>;
};

Button.defaultProps = {
    color: "black",
};

export default Button;
*/

//5.5
// 이벤트 핸들러
/*
const Button = ({text, color, children}) => {
    return ( 
    <button 
    onClick = {() => {
        console.log(text);
    }}
    style={{color: color}}>
        {text} - {color.toUpperCase()}
        {children}
        </button>
        );
};

Button.defaultProps = {
    color: "black",
};

export default Button;
*/

/*
const Button = ({text, color, children}) => {
    const onClickButton = () => {
        console.log(text);
    };

    return ( 
    <button 
    onClick = {onClickButton}
    // onMouseEnter={onClickButton}
    style={{color: color}}>
        {text} - {color.toUpperCase()}
        {children}
        </button>
        );
};

Button.defaultProps = {
    color: "black",
};

export default Button;
*/

// 이벤트 객체

const Button = ({text, color, children}) => {
    //이벤트 객체
    const onClickButton = (e) => {
        console.log(e);
        console.log(text);
    };

    return ( 
    <button 
    onClick = {onClickButton}
    // onMouseEnter={onClickButton}
    style={{color: color}}>
        {text} - {color.toUpperCase()}
        {children}
        </button>
        );
};

Button.defaultProps = {
    color: "black",
};

export default Button;



