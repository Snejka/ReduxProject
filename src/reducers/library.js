import data from '../__mock__/LibraryList.json';

export const libraryReducer = (state = [], action) => {
    return data;
}