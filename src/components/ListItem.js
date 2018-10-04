import React, { Component } from 'react';
import { StyleSheet, TouchableWithoutFeedback, Text, View, LayoutAnimation } from 'react-native';
import { connect } from 'react-redux';
import { selectAction } from '../actions'

import CardItem from './Card/CardItem';

class ListItem extends Component {

    componentWillUpdate() {
        LayoutAnimation.spring();
    }

    renderDescription = () => {
        const { library, expanded } = this.props;

        if (expanded) {
            return (
                <CardItem>
                    <Text style={styles.desc}>{library.description}</Text>
                </CardItem>
            )
        }
    }

    render() {
        const { library, selectAction } = this.props;
        const { titleStyle } = styles;

        return (
            <TouchableWithoutFeedback onPress={ () => selectAction(library.id) }>
                <View>
                    <CardItem>
                        <Text style={ titleStyle }>
                            { library.title }
                        </Text>
                    </CardItem>
                    {this.renderDescription()}
                </View>
            </TouchableWithoutFeedback>
        )
    }
}

const styles = StyleSheet.create({
    titleStyle: {
        fontSize: 18,
        paddingLeft: 15,
    },
    desc:{
        paddingHorizontal: 15,
        paddingVertical: 10
    }
});

const mapStateToPrps = (state, ownProps) => {
    const expanded = state.selection === ownProps.library.id;

    return {
        expanded
    }
}

export default connect(mapStateToPrps, { selectAction })(ListItem);