import { FETCH_ADVICE_START, FETCH_ADVICE_SUCCESS } from "../actions/index";

const initialState = {
    adviceName: "",
    error: "",
    isFetching: false
};


const reducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_ADVICE_START: 
            return {
                ...state,
                isFetching: true
            };
        case FETCH_ADVICE_SUCCESS:
            return {
                ...state,
                adviceName: action.payload,
                error:"",
                isFetching: false
            }
        default: return state;
    }
};

export default reducer;