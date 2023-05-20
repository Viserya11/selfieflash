    import { SET_DATE } from "../actions";

    const initialState = {
        date: "2023.01.01."
    }

    const dateReducer = (state=initialState, action) => {
        switch(action.type) {
            case SET_DATE: 
            return {
                ...state, 
                date: action.payload
            }
            default: 
            return state
        }
    }

    export default dateReducer