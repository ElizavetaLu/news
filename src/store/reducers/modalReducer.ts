const initialState = {}

const categoryReducer = (state = initialState, { type }: any) => {

    switch (type) {

        case 'TYPE':
            return { ...state };

        default:
            return state;
    }
}

export default categoryReducer