import { CHANGE_SEQ } from "../types";

let initialState;
try {
    initialState = JSON.parse(localStorage.getItem('videoseq')) || ['1', '2', '3', '4', '5', '6'];
} catch (error) {
    initialState = ['1', '2', '3', '4', '5', '6']; // Fallback in case of JSON parsing errors
}

const videoReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_SEQ:
            console.log(action.payload);
            localStorage.setItem('videoseq', JSON.stringify(action.payload));
            return [...action.payload]; // Ensure new reference for Redux state

        default:
            return state;
    }
};

export default videoReducer;
