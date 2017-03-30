import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { SelectTrip } from './../../components';
import NavbarContainer from './../NavbarContainer/NavbarContainer';

class PickOptionContainer extends Component {

    constructor(props) {
        super(props)
        this.state = { date: "2016-05-15" }
    }

    changeDate(date) {
        this.setState({ date: date });
    }

    createTrip(tripDetails) {
        alert(Object.keys(tripDetails));
    }

    render() {
        return (
            <NavbarContainer title={'Create a meeting'} hasBack style={{flex: 1}}>
        <ScrollView>
          <SelectTrip createTrip={this.createTrip}/>
          </ScrollView>
        </NavbarContainer>
        )
    }
}

export default PickOptionContainer;
