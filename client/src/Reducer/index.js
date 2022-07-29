const initialState = {
    words: []
};



function rootReducer(state = initialState, action) {
    
switch(action.type) {
    case 'GET_TEXT':
    return {
        ...state,
        words: [action.payload, ...state.words]
    }
      

    default: 
    return state;
      
}
}
  
export default rootReducer;