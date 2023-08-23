import { SHOW_SIDEBAR } from "../actions/types";

const initialstate = {
    isActive: false
}

const sidebarReducer = (state = initialstate, { type, payload }: any) => {
    
    switch (type) {
        case SHOW_SIDEBAR:
            return {
                ...state,
                isActive: !state.isActive
            }

        default:
            return state;
    };
};

export default sidebarReducer;