export const DISPLAY = 'DISPLAY';
export const EVALUATE = 'EVALUATE';


// Action creator for displaying expression
export const getDisplayAction = (array,text) => {
    return {
        type: DISPLAY,
        array: array,
        text: text
    }
};

// Action creator for evaluating the expression
export const getEvaluateAction = (array,text) => {
    console.log("EVALUATE ACTION");
    console.log(array);
    console.log(text);
    return {
        type: EVALUATE,
        array: array,
        text: text
    }
}