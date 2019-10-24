import { INNSER } from "../action";
const defaultState = {
    number: 1,
    arr: 10
}

export const count = (state = defaultState, action) => {
    switch (action.type) {
        case INNSER:
            return { ...state, number: action.time }
        case "arr":
            return { ...state, arr: action.arr }
        default:
            return state;
    }
}