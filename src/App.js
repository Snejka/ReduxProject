import React from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { rootReducer } from './reducers';

import Header from './components/Header';
import LibraryList from './components/LibraryList';

const store = createStore(rootReducer);

const App = () => {
    return (
        <Provider store={store}>  
            <View style={{ flex: 1 }}>
                <Header headerText='Tech Stack' />
                <LibraryList />
            </View>
        </Provider>
    )
}

export default App;