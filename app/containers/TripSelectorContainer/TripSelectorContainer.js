import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { SelectTrip } from './../../components';

class PickOptionContainer extends Component {

    constructor(props) {
        super(props)
        this.state = { date: "2016-05-15" }
    }

    changeDate(date) {
        this.setState({ date: date });
    }

    render() {
        return (
            <View style={{flex: 1}}>
        <SelectTrip date={this.state.date}/>
      </View>
        )
    }
}

export default PickOptionContainer;