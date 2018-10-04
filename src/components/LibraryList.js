import React, { Component } from 'react';
import { FlatList, Text } from 'react-native';
import { connect } from 'react-redux';

import ListItem from './ListItem';

class LibraryList extends Component {

    renderItem = ({item}) => {  
        return (
            <ListItem library={item} />
        )
    }

    render() {
        return (
            <FlatList
                data={ this.props.library }
                renderItem={ this.renderItem }
                keyExtractor={ (library) => library.id.toString() }
            />
        )
    }
}

const mapStateToPrps = (state, ownProps) => {
    console.log(state)
    return {
        library: state.library,
    }
}

export default connect(mapStateToPrps)(LibraryList);