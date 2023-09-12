import { combineReducers } from "redux";  
import briefSectionsReducer from "./briefSectionsReducer";  
import sidebarReducer from "./sidebarReducer";
import newsReducer from "./newsReducer";


const rootReducers = combineReducers({
    briefSections: briefSectionsReducer, 
    news: newsReducer,
    sidebar: sidebarReducer,
})

export default rootReducers