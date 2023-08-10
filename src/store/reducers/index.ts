import { combineReducers } from "redux"; 
import categoryReducer from "./modalReducer";


const rootReducers = combineReducers({
    category: categoryReducer,
})

export default rootReducers