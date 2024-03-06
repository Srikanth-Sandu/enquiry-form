const initialState={
    enquiries:[]
}

const Reducer=function(state=initialState,action){
    if(action.type==='ADD ENQUIRY'){
        return {...state,enquiries:[...state.enquiries,action.payload]}
    }
    return state;
}

export default Reducer;