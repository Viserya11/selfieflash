export const SET_DATE = "SET_DATE"
export const setDate = (value) => {
    return (dispatch, getState) => {
        console.log("i hate this", getState());
        dispatch({
            type: "SET_DATE",
            payload: value,
        })
    }
}
    