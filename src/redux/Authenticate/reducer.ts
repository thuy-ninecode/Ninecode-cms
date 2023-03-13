import ActionType from "./type";

const reducer = (state = {}, action:any) => {
    switch (action.type) {
      case ActionType.GET_PROFILE:
        return { ...state, loading: true };
      case ActionType.LOGIN:
        return { ...state, news: action.json[0], loading: false }
    case ActionType.LOGIN:
        return { ...state, news: action.json[0], loading: false }
      default: 
           return state;
    }
   };
   export default reducer;