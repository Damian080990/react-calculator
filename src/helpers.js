export const ACTIONS = {
    ADD_DIGIT: "add-digit",
    CHOOSE_OPERATION: "choose-operation",
    CLEAR: "clear",
    DELETE_DIGIT: "delete-digit",
    EVALUATE: "evaluate",
};

export const OPERATIONS = {
    PLUS: "+",
    MINUS: "-",
    MULTIPLY: "*",
    DIVIDE: "÷"
}

export function evaluate({ currentOperand, previousOperand, operation }) {
    const current = parseFloat(currentOperand);
    const prev = parseFloat(previousOperand);
    if (isNaN(prev) || isNaN(current)) return "";

    let computation = "";
    switch (operation) {
        case OPERATIONS.PLUS:
            computation = prev + current;
            break;

        case OPERATIONS.MINUS:
            computation = prev - current;
            break;

        case OPERATIONS.MULTIPLY:
            computation = prev * current;
            break;

        case OPERATIONS.DIVIDE:
            computation = prev / current;
            break;
    }


    return computation.toString();
}

// FORMATER LICZB -importujemy do previousOperand i currentOperand w divie w App

export const INTEGER_FORMATTER = new Intl.NumberFormat("en-us", {
    maximumFractionDigits: 0,
});

export function formatOperand(operand) {
    if (operand == null) return;
    const [integer, decimal] = operand.split(".");
    if (decimal == null) return INTEGER_FORMATTER.format(integer);
    return `${INTEGER_FORMATTER.format(integer)}.${decimal}`;
}