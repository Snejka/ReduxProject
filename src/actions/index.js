//Action Types
export const SELECT_ITEM = 'SELECT_ITEM';


//Action Creators
export const selectAction = (id) => {
    return {
        type: SELECT_ITEM,
        payload: id
    }
}

