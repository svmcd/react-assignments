const itrellsReducer = (state = [], action) => {   
    if(action.type === "ITRELLS"){
        state = action.payload;
    }
    return state
}   

const rootReducer = (state = {}, action) => {
    return{
        itrells: itrellsReducer(state.itrells, action),
    };
}

export default rootReducer;